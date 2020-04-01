import 'firebase/auth';

import firebase from 'firebase/app';

class FirebaseConnect {
  constructor() {
    this.firebaseConfig = {
      apiKey: process.env.REACT_APP_APIKEY,
      authDomain: process.env.REACT_APP_AUTHDOMAIN,
      databaseURL: process.env.REACT_APP_DATABASEURL,
      projectId: process.env.REACT_APP_PROJECTID,
      storageBucket: process.env.REACT_APP_STORAGEBUCKET,
      messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
      appId: process.env.REACT_APP_APPID
    };

    this.fireApp = firebase.initializeApp(this.firebaseConfig);
    this.fireAuth = firebase.auth(this.fireApp);
  }
}

export let firebaseConnect = new FirebaseConnect();
