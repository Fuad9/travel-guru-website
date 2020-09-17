import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Login/firebase.config";
import Auth from "../Login/Auth";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
  const [validated, setValidated] = useState(false);

  // to create new user
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (e.target.value === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log(user.email, user.password);
    if (user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    setValidated(true);
  };

  // // will handle latter
  // const handleSignOut = () => {
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then((res) => {
  //       const signedOutUser = {
  //         isSignedIn: false,
  //         name: "",
  //         email: "",
  //         error: "",
  //         success: false,
  //       };
  //       setUser(signedOutUser);
  //     });
  // };

  // to update use profile
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then(() => {
        console.log("user name updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSignUp}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Control
            required
            onBlur={handleBlur}
            type="text"
            name="name"
            placeholder="First Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Control
            required
            onBlur={handleBlur}
            type="text"
            name="name"
            placeholder="Last Name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Control
            required
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Username or Email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Control
            required
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Control
            required
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Confirm Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <Button type="submit">Signup</Button>
      </Form>
      <p className="text-danger">{user.error}</p>
      {user.success && (
        <p className="text-success">
          Account Created successfully, you can now login
        </p>
      )}
      <h5>
        Already have an account?<Link to="/login">Login</Link>
      </h5>
      <Auth></Auth>
    </div>
  );
};

export default Signup;
