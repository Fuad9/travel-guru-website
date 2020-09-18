import React from "react";
import { makeStyles } from "@material-ui/core";
import { Container, Carousel, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import backGround from "../../images/Image/backGround.png";
import sreemangal from "../../images/Image/Sreemongol1.png";
import sundarban from "../../images/Image/sundorbon.png";
import "./Home.css";

const Home = () => {
  const styles = {
    carouselImg: {
      width: "35em",
      height: "25em",
      border: "2px solid yellow",
      borderRadius: "10%",
    },
    cardImg: {
      width: "100%",
      height: "20em",
      border: "2px solid yellow",
      borderRadius: "10%",
    },
  };

  const useStyles = makeStyles({
    root: {
      margin: "4em 8em",
      "@media(max-width: 900px)": {
        margin: "4em 3em",
      },
    },
  });

  const classes = useStyles();

  return (
    <div className="home">
      <Carousel style={styles.carouselImg} className={classes.root}>
        <Carousel.Item>
          <Link to="/place/cox'sBazar">
            <img
              className="d-block"
              style={styles.carouselImg}
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
              style={styles.carouselImg}
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
              style={styles.carouselImg}
              src={sundarban}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Sundarban</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
      <Container className="d-flex">
        <Col xs={4} md={4}>
          <div>
            <Link to="/place/cox'sBazar">
              <img
                style={styles.cardImg}
                variant="top"
                src={backGround}
                alt=""
              />
            </Link>
            <div>
              <h4>Cox's Bazar'</h4>
              <p>
                Cox's Bazar is a city, fishing port, tourism centre and district
                headquarters in southeastern Bangladesh. It is famous mostly for
                its long natural sandy beach...
              </p>
            </div>
          </div>
        </Col>
        <Col xs={4} md={4}>
          <div>
            <Link to="/place/sreemangal">
              <img
                style={styles.cardImg}
                variant="top"
                src={sreemangal}
                alt=""
              />
            </Link>
            <div>
              <h4>Sreemangal</h4>
              <p>
                Madhobpur Lake is one of the main tourist attractions in the
                area, and is home to the Great White-Bellied Heron, the only
                confirmed site in Bangladesh. The Baikka beel is also a...{" "}
              </p>
            </div>
          </div>
        </Col>
        <Col xs={4} md={4}>
          <div>
            <Link to="/place/sundarban">
              <img
                style={styles.cardImg}
                variant="top"
                src={sundarban}
                alt=""
              />
            </Link>
            <div>
              <h4>Sundarban</h4>
              <p>
                The Sundarbans is a mangrove area in the delta formed by the
                confluence of the Ganges, Brahmaputra and Meghna Rivers in the
                Bay of Bengal. It spans from the Hooghly River in India's state
                of West Bengal to the Baleswar River in Bangladesh. It comprises
                closed and open mangrove...
              </p>
            </div>
          </div>
        </Col>
      </Container>
    </div>
  );
};

export default Home;
