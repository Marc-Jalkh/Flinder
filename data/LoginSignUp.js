import { initializeApp } from 'firebase/app';
import { getAuth, updateCurrentUser } from 'firebase/auth';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './Connection.js';
import { Timestamp, doc, getFirestore, setDoc,getDoc, updateDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { onSnapshot } from "firebase/firestore";

const app = initializeApp(firebaseConfig);
async function signUp(email, password, checked,info,setChanged,changed) {
  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        AccountInfo(user.uid,info);
        signIn(email,password,checked,setChanged,changed);
    })
    .catch((error) => {
      const ErrorMsg = error.message;
    });
}
async function AccountInfo(id,info){
  const db = getFirestore(app);
  await setDoc(doc(db,"UserIdInfo",id), {
    FirstName: info.FirstName,
    LastName: info.LastName,
    DateOfBirth: Timestamp.fromDate(new Date(info.DateOfBirth)) ,
    coins : 0,
    Payment: [],
    Location: info.Location,
    ProfilePic: "gs://flindr-1f705.appspot.com/avatar.jpg",
    Flights:[]
  });

}
export async function EditProf(id,number,name,expiry,cvc,info){
  const db = getFirestore(app);

  const docRef = updateDoc(doc(db, "UserIdInfo", id), {
    FirstName: info[0],
    LastName: info[1],
    DateOfBirth: Timestamp.fromDate(new Date(info[2])) ,
    coins : info[3],
    Payment: [number,name,expiry,cvc],
    Location: info[5],
    ProfilePic: info[6],
  });
}

export async function ProfileFlights(id,flights){
  const db = getFirestore(app);
  let FlyingArray = await getAccountInfo(id);
  if(FlyingArray[7] == undefined){
    FlyingArray[7] = [flights];
  }
  else{
    //check if the flight is already in the array
    for(let i = 0; i < FlyingArray[7].length; i++){
      if(FlyingArray[7][i].time == flights.time && FlyingArray[7][i].PlaneCode == flights.PlaneCode){
        throw "Flight already Booked";
        return;
      }
    }
    FlyingArray[7].push(flights);
  }
  const docRef =  updateDoc(doc(db, "UserIdInfo", id), {
    Flights: FlyingArray[7],
    coins: FlyingArray[3] + flights.price *100
  });
}

class User{

  constructor(FirstName,LastName,DateOfBirth,coins,Payment,Location,ProfilePic,Flights){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.DateOfBirth=DateOfBirth;
    this.coins=coins;
    this.Payment=Payment;
    this.Location=Location;
    this.ProfilePic=ProfilePic;
    this.Flights=Flights;
  }

  toString(){
    return this.FirstName + " " + this.LastName + " " + this.DateOfBirth+ " " + this.coins+ " " + this.Payment[0]+ " " + this.Payment[1]+ " " + this.Payment[2]+ " " + this.Payment[3]+ " " + this.Location+ " " + this.ProfilePic;
  }
}
const UserConverter = {
  toFirestore: (user) => {
    return {
      FirstName: user.FirstName,
      LastName: user.LastName,
      DateOfBirth: user.DateOfBirth,
      coins : user.coins,
      Payment: user.Payment,
      Location: user.Location,
      ProfilePic: user.ProfilePic,
      Flights: user.Flights
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.FirstName, data.LastName, data.DateOfBirth, data.coins,data.Payment,data.Location,data.ProfilePic,data.Flights);
  }
}
export async function getAccountInfo(id){
  const db = getFirestore(app);
  const docRef = doc(db, "UserIdInfo", id).withConverter(UserConverter);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    const profilePicture= await getImage(data.ProfilePic);
    return [data.FirstName, data.LastName, data.DateOfBirth.toDate(),data.coins,data.Payment,data.Location,profilePicture,data.Flights];
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
    return 1;
  }
}

export function signIn(email,password,checked,setChanged,changed,errorCallback){
    const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await AsyncStorage.setItem('isLoggedIn', 'true');
               await AsyncStorage.setItem('user', JSON.stringify(user.uid));
                setChanged(!changed);
              })
            .catch((error) => {
                errorCallback(error.message);
            });

}

export async function getImage(Avatar){
  const storage = getStorage(app);

  const storageRef = ref(storage, Avatar);
  const imgUrl = await getDownloadURL(storageRef)
  .then((url) => {
    return url;
  })
  .catch((error) => {
    // Handle any errors
  });
  return imgUrl; 
}
export async function uploadImage(file,uid,passport){
  //get the file from the url
  const uploadedImg = await fetch(file);
  const blob = await uploadedImg.blob();
  //upload the file to firebase storage
  const storage = getStorage(app);
  let urlImg = "";
  const storageRef = ref(storage, "gs://flindr-1f705.appspot.com/"+passport+uid);
  const uploadTask = uploadBytesResumable(storageRef, blob);
  uploadTask.on('state_changed',
  (snapshot) => {
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  },
  (error) => {
    // Handle unsuccessful uploads
  },
  () => {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    imgUrl= getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      console.log('File available at', downloadURL);
      return downloadURL;
    });
  }
);
return imgUrl;
}


export default signUp;