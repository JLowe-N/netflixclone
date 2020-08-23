import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = process.env.REACT_APP_NETFLIXCLONE_CONFIG;

// 1) when seeding the database you'll have to uncomment this!


const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };