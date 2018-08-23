import firebase from 'firebase'
import { provider } from '../../config/firebaseConfig'

export default function signInWithGoogle() {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    self.$router.push({path: '/main'});
  }).catch(function (error) {
    console.log("errorCode: " + error.code + ". errorMessage : " + error.message + ". email : " + error.email);
  });
}