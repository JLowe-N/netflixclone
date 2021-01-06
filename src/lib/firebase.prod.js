import * as Firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: process.env.REACT_APP_NETFLIXCLONE_APIKEY,
  authDomain: process.env.REACT_APP_NETFLIXCLONE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_NETFLIXCLONE_DATABASEURL,
  projectId: process.env.REACT_APP_NETFLIXCLONE_PROJECTID,
  storageBucket: process.env.REACT_APP_NETFLIXCLONE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_NETFLIXCLONE_MESSAGINGSENDERID,
  measurementId: process.env.REACT_APP_NETFLIXCLONE_MEASUREMENTID,
}

const firebase = Firebase.initializeApp(config)

export { firebase }
