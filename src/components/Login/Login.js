import React, { useContext, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import Auth from "./Auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../App";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [validated, setValidated] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    newUser: "",
    name: "",
    email: "",
    password: "",
    error: "",
  });

  // context api
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

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

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log(user.email, user.password);
    if (user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
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

  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        const signedOutUser = {
          isSignedIn: false,
          name: "",
          email: "",
          error: "",
          success: false,
        };
        setUser(signedOutUser);
      });
  };

  return (
    <div>
      <Form noValidate validated={validated}>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            onBlur={handleBlur}
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            onBlur={handleBlur}
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {user.isSignedIn ? (
          <Button onClick={handleSignOut} type="submit">
            Logout
          </Button>
        ) : (
          <Button onClick={handleSignIn} type="submit">
            Login
          </Button>
        )}
      </Form>
      <p className="text-danger">{user.error}</p>
      {user.success && (
        <p className="text-success">You have logged in successfully</p>
      )}
      <h5>
        Don't have an account?<Link to="/signup">Create an account</Link>
      </h5>
      <Auth></Auth>
    </div>
  );
};

export default Login;
