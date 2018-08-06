import React from 'react';

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import axios from "axios";
import * as firebaseui from 'firebaseui';
import "./loginsignup.css"


// Initialize Firebase
let config = {
  apiKey: "AIzaSyA8j7FJgRdaFGdJVYskvUJO19O6O_RM_lw",
  authDomain: "jamsesh-c43bb.firebaseapp.com",
  databaseURL: "https://jamsesh-c43bb.firebaseio.com",
  projectId: "jamsesh-c43bb",
  storageBucket: "jamsesh-c43bb.appspot.com",
  messagingSenderId: "84443028283"
};
firebase.initializeApp(config);

  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/Merrit Page',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ]
};


class loginsignup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <div id="startup">
           <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} className="hvr-back-pulse" id="login"/>
            {/* <div id="loginwrap"><a href="" className="hvr-back-pulse" id="login">LOG IN</a></div> */}
          </div>
      </div>
    );
  }
}

export default loginsignup
