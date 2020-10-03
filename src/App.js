import React, { createContext, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import NavBar from "./components/NavBar/NavBar";
import News from "./components/News/News";
import NotFound from "./components/NotFound/NotFound";
import Booking from "./components/Booking/Booking";
import Hotels from "./components/Hotels/Hotels";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import background from "./images/Image/backGround.png";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  const styles = {
    backgroundImg: {
      backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${background})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "100% 100%",
    },
  };

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="App" style={styles.backgroundImg}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/booking/:id">
              <Booking />
            </Route>
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
