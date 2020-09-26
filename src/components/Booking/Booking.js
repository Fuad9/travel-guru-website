import React, { useState } from "react";
import { Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useParams } from "react-router-dom";
import icon from "../../images/Icon/calender_icon.png";
import places from "../fakeData/places";
import "./Booking.css";

const Booking = () => {
  const { id } = useParams();
  const [startingDate, setStartingDate] = useState(null);
  const [endingDate, setEndingDate] = useState(null);

  const showPlaceDetails = places.find((place) => place.id === id);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-10 col-sm-10 col-md-5 col-lg-5"
            style={{ color: "white" }}
          >
            <h4 style={{ textTransform: "uppercase", fontSize: "3rem" }}>
              {showPlaceDetails.title}
            </h4>
            <p style={{ fontWeight: "bold" }}>{showPlaceDetails.description}</p>
          </div>
          <form className="col-10 col-sm-10 col-md-5 col-lg-5">
            <label htmlFor="origin">Origin</label>
            <input className="form-control" type="text" name="origin" />
            <br />
            <label htmlFor="destination">Destination</label>
            <input className="form-control" type="text" name="destination" />
            <br />
            <div className="d-flex">
              <img src={icon} alt="" />
              <h5>
                Starting Date:{" "}
                <DatePicker
                  selected={startingDate}
                  onChange={(date) => setStartingDate(date)}
                  dateFormat="dd-MM-yyyy"
                  minDate={new Date()}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                />
              </h5>
            </div>
            <div className="d-flex mt-2">
              <img src={icon} alt="" />
              <h5>
                Ending Date:{" "}
                <DatePicker
                  selected={endingDate}
                  onChange={(date) => setEndingDate(date)}
                  dateFormat="dd-MM-yyyy"
                  minDate={new Date()}
                  isClearable
                  showYearDropdown
                  scrollableMonthYearDropdown
                />
              </h5>
            </div>
            <br />
            <Link to={"/hotels/" + id}>
              <Button variant="warning" type="submit" className="w-100">
                Start Booking
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
