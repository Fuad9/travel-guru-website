import React, { useState } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Auth/firebase.config";
import { useForm } from "react-hook-form";
import Auth from "./userAuth";
import "./Login.css";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Signup = () => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm();

  const auth = Auth();

  const onSubmit = (data) => {
    if (loggedInUser) {
      if (data.email && data.password) {
        auth.signIn(data.email, data.password);
      }
    } else {
      if (data.name && data.email && data.password && data.confirmPassword) {
        auth.signUp(data.name, data.email, data.confirmPassword);
      }
    }
  };

  return (
    <div className="container">
      {loggedInUser ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          {auth.user !== null && (
            <p className="text-danger">* {auth.user.error}</p>
          )}
          <div className="inputBox">
            <input
              name="email"
              md={12}
              lg={12}
              type="email"
              ref={register({ required: true })}
              placeholder="Enter Your Email"
            />
            {errors.email && <span className="error">Email is required</span>}
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input
              name="email"
              md={12}
              lg={12}
              type="password"
              ref={register({ required: true })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <span className="error">Password is required</span>
            )}
            <label>Password</label>
          </div>
          <input type="submit" value="SignIn" />
          <br />
          <label className="label" onClick={() => setLoggedInUser(false)}>
            Create New Account
          </label>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {auth.user != null && (
            <p className="text-danger">* {auth.user.error}</p>
          )}
          <div className="inputBox">
            <input
              name="name"
              md={12}
              lg={12}
              type="text"
              ref={register({ required: true })}
              placeholder="Enter Your Name"
            />
            {errors.email && <span className="error">Name is required</span>}
            <label>Name</label>
          </div>
          <div className="inputBox">
            <input
              name="email"
              md={12}
              lg={12}
              type="email"
              ref={register({ required: true })}
              placeholder="Enter Your Email"
            />
            {errors.email && <span className="error">Email is required</span>}
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input
              name="password"
              md={12}
              lg={12}
              type="password"
              ref={register({ required: true })}
              placeholder="Enter Your Password"
            />
            {errors.password && (
              <span className="error">Password is required</span>
            )}
            <label>Password</label>
          </div>
          <div className="inputBox">
            <input
              name="confirmPassword"
              md={12}
              lg={12}
              type="password"
              ref={register({
                required: true,
                validate: (value) => value === watch("password"),
              })}
              placeholder="Confirm Password"
            />
            {errors.password && (
              <span className="error">Password didn't match</span>
            )}
            <label>Confirm Password</label>
          </div>

          <input type="submit" value="SignUp" />
          <br />
          <label className="label" onClick={() => setLoggedInUser(true)}>
            Already have an account?
          </label>
        </form>
      )}
    </div>
  );
};

export default Signup;
