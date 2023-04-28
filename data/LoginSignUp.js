import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './Connection.js';
import { Timestamp, doc, getFirestore, setDoc,getDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  });
}

class User{

  constructor(FirstName,LastName,DateOfBirth,coins){
    this.FirstName=FirstName;
    this.LastName=LastName;
    this.DateOfBirth=DateOfBirth;
    this.coins=coins;
  }

  toString(){
    return this.FirstName + " " + this.LastName + " " + this.DateOfBirth+ " " + this.coins;
  }
}
const UserConverter = {
  toFirestore: (user) => {
    return {
      FirstName: user.FirstName,
      LastName: user.LastName,
      DateOfBirth: user.DateOfBirth,
      coins : user.coins,
    };
  },
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User(data.FirstName, data.LastName, data.DateOfBirth, data.coins);
  }
}
export async function getAccountInfo(id){
  const db = getFirestore(app);
  const docRef = doc(db, "UserIdInfo", id).withConverter(UserConverter);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const data = docSnap.data();
    
    return [data.FirstName, data.LastName, data.DateOfBirth.toDate(),data.coins];
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

export default signUp;