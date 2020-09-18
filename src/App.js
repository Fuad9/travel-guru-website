import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import Signup from "./components/Signup/Signup";
import ShowPlace from "./components/ShowPlace/ShowPlace";
import Booking from "./components/Booking/Booking";
import Hotels from "./components/Hotels/Hotels";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App">
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/place/:id">
              <ShowPlace></ShowPlace>
            </Route>
            <Route path="/booking">
              <Booking></Booking>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <PrivateRoute path="/hotels">
              <Hotels></Hotels>
            </PrivateRoute>
            <Route path="/news">
              <News></News>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
