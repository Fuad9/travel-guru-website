import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import icon from "../../images/Icon/calender_icon.png";

const Booking = () => {
  const [startingDate, setStartingDate] = useState(null);
  const [endingDate, setEndingDate] = useState(null);

  const styles = {
    width: "22em",
    heigth: "22em",
  };

  return (
    <div style={styles}>
      <Form>
        <Form.Group>
          <Form.Label>Origin</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label>Destination</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Col>
          <Col style={{ display: "flex" }}>
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
          </Col>
          <Col style={{ display: "flex" }}>
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
          </Col>
        </Col>
        <br />
        <Link to="/hotels">
          <Button variant="warning" type="submit" style={{ width: "22em" }}>
            Start Booking
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Booking;
