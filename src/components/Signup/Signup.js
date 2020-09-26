import React, { useState } from "react";
import { Button, Form as input, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Auth/firebase.config";
import Signin from "../Auth/Signin";
import { useForm } from "react-hook-form";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
  const { register, handleSubmit, errors } = useForm();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
    success: false,
  });

  const onChangeHandler = (e) => {
    let isFieldValid = true;
    const { name, value: defaultValue } = e.target;
    if (name === "name") {
      setName(defaultValue);
    }
    if (name === "email") {
      setEmail(defaultValue);
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if (name === "password") {
      setPassword(defaultValue);
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (name === "confirmPassword") {
      setConfirmPassword(defaultValue);
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
    if (password === confirmPassword) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserName(user.name);
          verifyEmail();
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    } else {
      alert("password didn't match, please try again");
    }
  };

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

  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleSignUp)}>
        <div className="inputBox">
          <input
            ref={register({ required: true })}
            onBlur={onChangeHandler}
            type="text"
            name="name"
            defaultValue={name}
            placeholder="First Name"
          />
          {errors.name && <span className="text-danger">Name is required</span>}
          <label htmlFor="name">First Name</label>
        </div>
        <div className="inputBox">
          <input
            onBlur={onChangeHandler}
            type="text"
            name="name"
            defaultValue={name}
            placeholder="Last Name"
          />
          <label htmlFor="name">Last Name</label>
        </div>
        <div className="inputBox">
          <input
            ref={register({ required: true })}
            onBlur={onChangeHandler}
            type="email"
            name="email"
            defaultValue={email}
            placeholder="Username or Email"
          />
          {errors.email && (
            <span className="text-danger">Email is required</span>
          )}
          <label htmlFor="email">Email</label>
        </div>
        <div className="inputBox">
          <input
            ref={register({ required: true })}
            onBlur={onChangeHandler}
            type="password"
            name="password"
            defaultValue={password}
            placeholder="Enter Your Password"
          />
          {errors.password && (
            <span className="text-danger">Password is required</span>
          )}
          <label htmlFor="password">Password</label>
        </div>
        <div className="inputBox">
          <input
            ref={register({ required: true })}
            onBlur={onChangeHandler}
            type="password"
            name="confirmPassword"
            defaultValue={confirmPassword}
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && (
            <span className="text-danger">
              Please confirm your password before submitting
            </span>
          )}
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>

        <input type="submit" value="Signup" />
        <p className="text-danger">{user.error}</p>
        {user.success && (
          <p className="text-success">
            Account Created successfully, you can now login
          </p>
        )}
        <h5>
          Already have an account?<Link to="/login">Login</Link>
        </h5>
        <Signin></Signin>
      </form>
    </div>
  );
};

export default Signup;
