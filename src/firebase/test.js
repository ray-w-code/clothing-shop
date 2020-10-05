import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

//3 ways to query for items in firebase
firestore.collection('users').doc('J7drXJRouQuLLuVWt0a7').collection('cartItems').doc('fpCOHbzAHbSdw66YSFrH');

firestore.doc('/users/J7drXJRouQuLLuVWt0a7/cartItems/fpCOHbzAHbSdw66YSFrH');

firestore.collection('/users/J7drXJRouQuLLuVWt0a7/cartItems');