import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import ShowPlace from "./components/ShowPlace/ShowPlace";
import Booking from "./components/Booking/Booking";
import Hotels from "./components/Hotels/Hotels";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import background from "./images/Image/backGround.png";
import { handleGoogleSignIn } from "./components/Auth/loginManager";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  // const backgroundImg = (<img src={background} alt=""/>)

  const backgroundURL = require("./images/Image/backGround.png");

  const home = (
    <Route path="/home">
      <Home />
    </Route>
  );

  const booking = (
    <Route path="/booking/:id">
      <Booking />
    </Route>
  );

  const styles = {
    backgroundImg: {
      background: "url(" + backgroundURL + ") no-repeat center center",
      backgroundSize: "100% 100%",
      // width: "100%",
      // height: "100%",
    },

    //   colorOverlay: {
    //     width: "100%",
    //     height: "100%",
    //     background: "#fff",
    //     opacity: "0.4",
    //     position: "absolute",
    //   },
  };

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App" style={home && styles.backgroundImg}>
        <Router>
          <NavBar />
          <Switch>
            {home}
            {booking}
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/hotels/:id">
              <Hotels />
            </PrivateRoute>
            <Route path="/news">
              <News />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
