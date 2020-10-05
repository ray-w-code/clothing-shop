import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC7DqOvqBcX_IUdnA1zfSBLzc1vF-D7w8c",
    authDomain: "clothing-db-7601f.firebaseapp.com",
    databaseURL: "https://clothing-db-7601f.firebaseio.com",
    projectId: "clothing-db-7601f",
    storageBucket: "clothing-db-7601f.appspot.com",
    messagingSenderId: "499089391376",
    appId: "1:499089391376:web:191e88ba713a4d5143ef95",
    measurementId: "G-2JFHRLTFZL"
  }

  export const createUserProfileDocument = async (userAuth, addtionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapShot = await userRef.get();
    console.log("snapShot:", snapShot) 

    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt  = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...addtionalData
        })
      } catch (error){
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
  export default firebase;