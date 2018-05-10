import * as firebase from 'firebase';

const prodConfig = {
  apiKey: 'AIzaSyCdpdwK-XWAc-zVrQKYo-q5Ztbm_GVEn78',
  authDomain: 'localhost',
  databaseURL: 'https://pct-site.firebaseio.com/',
  projectId: 'pct-site',
  storageBucket: '',
  messagingSenderId: '',
};

const devConfig = {
    apiKey: 'AIzaSyCdpdwK-XWAc-zVrQKYo-q5Ztbm_GVEn78',
    authDomain: 'localhost',
    databaseURL: 'https://pct-site.firebaseio.com/',
    projectId: 'pct-site',
    storageBucket: '',
    messagingSenderId: '',
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};