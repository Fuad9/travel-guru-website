import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import hotels from "../fakeData/hotelData";

const Hotels = () => {
  const [hotel, setHotel] = useState([]);

  // search event listener
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.value.toLowerCase();
    const matched = hotels.filter(
      (item) =>
        item.category.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText)
    );
    setHotel(matched);
    console.log(hotel);
  };

  return (
    <>
      <div>
        <h4>last page</h4>
        <h4>Here shows hotels and map</h4>
        <input
          onKeyUp={handleSearch}
          type="text"
          placeholder="Search your hotel by place name"
        />
      </div>
      <div>
        {hotel.map((elem) => (
          <div>
            <h4>{elem.title}</h4>
            <p>{elem.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hotels;
