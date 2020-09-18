import React from "react";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import places from "../fakeData/places";

const ShowPlace = () => {
  const { id } = useParams();

  const place = places.find((elem) => elem.id === id);

  return (
    <div>
      <h4>{place.title}</h4>
      <p>{place.description}</p>
      <Link to="/booking">
        <Button variant="warning">Booking</Button>
      </Link>
    </div>
  );
};

export default ShowPlace;
