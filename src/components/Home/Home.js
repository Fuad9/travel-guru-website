import React, { createContext, useState } from "react";
import Card from "../Card/Card";
import places from "../fakeData/places";
import "./Home.css";
import arrowLeft from "../../images/Icon/arrowLeft.png";
import arrowRight from "../../images/Icon/arrowRight.png";
import ShowPlace from "../ShowPlace/ShowPlace";

export const PlaceContext = createContext();

const Home = () => {
  const [placeDetails, setPlaceDetails] = useState(places[0]);

  const [property, setProperty] = useState(places[0]);

  const properties = places;

  const nextProperty = () => {
    const newIndex = property.index + 1;
    setProperty(places[newIndex]);
    setPlaceDetails(places[newIndex]);
  };

  const prevProperty = () => {
    const newIndex = property.index - 1;
    setProperty(places[newIndex]);
    setPlaceDetails(places[newIndex]);
  };

  return (
    <>
      <PlaceContext.Provider value={[placeDetails, setPlaceDetails]}>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-10 col-lg-5"
              style={{ zIndex: "1", fontWeight: "bold", color: "white" }}
            >
              <ShowPlace />
            </div>
            <div className="home col-10 col-lg-5">
              <div>
                <button
                  onClick={() => prevProperty()}
                  disabled={property.index === 0}
                  style={{ borderRadius: "50%", outline: "none" }}
                >
                  <img style={{ width: "30px" }} src={arrowLeft} alt="" />
                </button>
                <button
                  onClick={nextProperty}
                  disabled={property.index === places.length - 1}
                  style={{ borderRadius: "50%", outline: "none" }}
                >
                  <img style={{ width: "30px" }} src={arrowRight} alt="" />
                </button>
              </div>
              <div className="page">
                <div className="col">
                  <div
                    className={`cards-slider active-slide-${property.index}`}
                  >
                    <div
                      className="cards-slider-wrapper"
                      style={{
                        transform: `translateX(-${
                          property.index * (100 / properties.length)
                        }%)`,
                      }}
                    >
                      {properties.map((property) => (
                        <Card key={property.index} property={property} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PlaceContext.Provider>
    </>
  );
};

export default Home;
