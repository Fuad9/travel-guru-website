import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PlaceContext } from "../Home/Home";

const ShowPlace = () => {
  const [placeDetails] = useContext(PlaceContext);

  const { id, title, about } = placeDetails;

  return (
    <div>
      <h4 style={{ textTransform: "uppercase", fontSize: "3rem" }}>{title}</h4>
      <p>{about}</p>
      <Link to={"/booking/" + id}>
        <Button variant="warning">Booking</Button>
      </Link>
    </div>
  );
};

export default ShowPlace;
