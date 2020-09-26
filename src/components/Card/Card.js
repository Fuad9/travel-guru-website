import React from "react";
// import { Link } from "react-router-dom";

const Card = ({ property }) => {
  const { index, picture, title } = property;

  return (
    <>
      <div id={`card-${index}`} className="card">
        <div>
          <img src={picture} alt="" />
        </div>
        <div className="details">
          <h4>{title}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
