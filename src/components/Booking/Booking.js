import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import icon from "../../images/Icon/calender_icon.png";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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
        <Row>
          <Col style={{ display: "flex" }}>
            <img src={icon} alt="" />
            <Form.Control placeholder="Starting Date" />
          </Col>
          <Col style={{ display: "flex" }}>
            <img src={icon} alt="" />
            <Form.Control placeholder="Ending Date" />
          </Col>
        </Row>
        <br />
        <Link to="/hotels">
          <Button variant="warning" type="submit" style={{ width: "22em" }}>
            Start Booking
          </Button>
        </Link>
      </Form>
      <h5>
        From:{" "}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
        />
      </h5>
      <h5>
        To:{" "}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd-MM-yyyy"
          minDate={new Date()}
        />
      </h5>
    </div>
  );
};

export default Booking;
