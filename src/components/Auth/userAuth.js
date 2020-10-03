import React, { createContext, useContext, useEffect, useState } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { Redirect, Route } from "react-router-dom";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const signIn = (email, password) => {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        window.history.back();
      })
      .catch((err) => setUser({ error: err.message }));
  };

  // const signUp = (name, email, password) => {
  //   return firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((res) => {
  //       firebase
  //         .auth()
  //         .currentUser.updateProfile({
  //           displayName: name,
  //         })
  //         .then((res) => {
  //           setUser(res.user);
  //           window.history.back();
  //         });
  //     })
  //     .catch((err) => setUser({ error: err.message }));
  // };

  const signUp = (email, password) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        setUser(res.user);
        updateUserName(user.name);
        verifyEmail();
        window.history.back();
      })
      .catch((err) => setUser({ error: err.message }));
  };

  // to update use profile
  const updateUserName = (name) => {
    firebase
      .auth()
      .currentUser.updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("user name updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // to verifyEmail email
  const verifyEmail = () => {
    firebase
      .auth()
      .currentUser.sendEmailVerification()
      .then(() => {
        console.log("verification email sent successfully");
      })
      .catch((err) => {
        console.log(err);
        console.log(err.message);
      });
  };

  // to sign out
  const signOut = async () => {
    await firebase.auth().signOut();
    return setUser(null);
  };

  return {
    user,
    signIn,
    signUp,
    signOut,
  };
};

export default Auth;

// to verifyEmail email
const verifyEmail = () => {
  const user = firebase.auth().currentUser;

  user
    .sendEmailVerification()
    .then(() => {
      console.log("verification email sent successfully");
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};
