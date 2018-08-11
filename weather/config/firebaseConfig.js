import firebase from 'firebase';

export const config = {
  apiKey: "AIzaSyCOtIWF1WaZ6xGdIZ4a7b4NDG8SoKjHhVE",
  authDomain: "pwa-weather-application.firebaseapp.com",
  databaseURL: "https://pwa-weather-application.firebaseio.com",
  projectId: "pwa-weather-application",
  storageBucket: "pwa-weather-application.appspot.com",
  messagingSenderId: "787569323229"
};
firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');