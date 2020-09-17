import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import backGround from "../../images/Image/backGround.png";
import sreemangal from "../../images/Image/Sreemongol1.png";
import sundarban from "../../images/Image/sundorbon.png";
import places from "../fakeData/places";
import ShowPlace from "../ShowPlace/ShowPlace";

const Home = () => {
  const styles = {
    root: {
      width: "35em",
      height: "25em",
      border: "2px solid yellow",
      borderRadius: "10%",
    },
  };

  return (
    <>
      <div>
        <Carousel style={styles.root}>
          <Carousel.Item>
            <Link to="/place/cox'sBazar">
              <img
                className="d-block"
                style={styles.root}
                src={backGround}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Cox's Bazar</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/place/sreemangal">
              <img
                className="d-block"
                style={styles.root}
                src={sreemangal}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Sreemangal</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/place/sundarban">
              <img
                className="d-block"
                style={styles.root}
                src={sundarban}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Sundarban</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
