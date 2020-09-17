import React, { useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Auth = () => {
  const [user, setUser] = useState({
    isSignedIn: false,
    email: "",
  });

  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  // google sign in
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const signedInUser = {
          isSignedIn: true,
          email: res.user.email,
        };
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // fb sign in
  const handleFbSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(fbProvider)
      .then((res) => {
        const signedInUser = {
          isSignedIn: true,
          email: res.user.email,
        };
        setUser(signedInUser);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // sign out
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedOut: false,
          email: "",
        };
        setUser(signedOutUser);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  return (
    <>
      {user.isSignedIn ? (
        <button
          onClick={() => {
            handleSignOut();
          }}
        >
          Sign out google
        </button>
      ) : (
        <button
          onClick={() => {
            handleGoogleSignIn();
          }}
        >
          Sign in with Google
        </button>
      )}
      <br />
      <br />
      {user.isSignedIn ? (
        <button
          onClick={() => {
            handleSignOut();
          }}
        >
          Sign out from facebook
        </button>
      ) : (
        <button
          onClick={() => {
            handleFbSignIn();
          }}
        >
          Sign in with Facebook
        </button>
      )}
    </>
  );
};

export default Auth;
