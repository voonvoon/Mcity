import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// import { cityDb } from './temp/m-city-export';

const firebaseConfig = {
    apiKey: "AIzaSyBLrV8IgXAuN3cwY3gFldoANUqf1j2etUo",
    authDomain: "mcity-6501b.firebaseapp.com",
    projectId: "mcity-6501b",
    storageBucket: "mcity-6501b.appspot.com",
    messagingSenderId: "122474125869",
    appId: "1:122474125869:web:6fe33275f96205c8dbb6a4",
    measurementId: "G-7CZ9LZF37L"
};

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const DB = firebase.firestore();
const matchesCollection = DB.collection('matches');
const playersCollection = DB.collection('players');
const positionsCollection = DB.collection('positions');
const promotionsCollection = DB.collection('promotions');
const teamsCollection = DB.collection('teams')

// cityDb.matches.forEach(item => {
//   matchesCollection.add(item)
// });

// cityDb.players.forEach(item => {
//   playersCollection.add(item)
// });

// cityDb.positions.forEach(item => {
//   positionsCollection.add(item)
// });

// cityDb.promotions.forEach(item => {
//   promotionsCollection.add(item)
// });

// cityDb.teams.forEach(item => {
//   teamsCollection.add(item)
// });


export {
    firebase,
    matchesCollection,
    playersCollection,
    positionsCollection,
    promotionsCollection,
    teamsCollection

}