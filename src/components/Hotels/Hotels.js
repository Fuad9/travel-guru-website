import React, { useState } from "react";
import hotels from "../fakeData/hotelData";
import Map from "./Map";

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
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="w-50">
          <input
            onKeyUp={handleSearch}
            type="text"
            placeholder="Search your hotel by place name"
          />
          {hotel.map((elem) => (
            <div>
              <img src={elem.img} alt="" style={{ width: "400px" }} />
              <h4>{elem.title}</h4>
              <p>{elem.description}</p>
              <p>Reviews: {elem.star}</p>
              <p>Price: {elem.price}</p>
            </div>
          ))}
        </div>
        <Map></Map>
      </div>
    </>
  );
};

export default Hotels;
