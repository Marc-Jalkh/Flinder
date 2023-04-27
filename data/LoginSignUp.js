import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from './Connection.js';
import { Timestamp, doc, getFirestore, setDoc } from "firebase/firestore";
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
  });
}
export function signIn(email,password,checked,setChanged,changed,errorCallback){
    const auth = getAuth(app);

        signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await AsyncStorage.setItem('isLoggedIn', 'true');
             //   await AsyncStorage.setItem('user', userCredential);
                setChanged(!changed);
              })
            .catch((error) => {
                errorCallback(error.message);
            });

}

export default signUp;