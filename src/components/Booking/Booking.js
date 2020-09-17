import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import icon from "../../images/Icon/calender_icon.png";

const Booking = () => {
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
    </div>
  );
};

export default Booking;
