import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import places from "../fakeData/places";

const Map = () => {
  const [place, setPlace] = useState({});

  // search event listener
  const handleSearch = (event) => {
    event.preventDefault();
    const searchText = event.target.value.toLowerCase();
    const matched = places.find(
      (item) =>
        item.id.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText)
    );
    setPlace(matched);
  };

  const { lat, long } = place;

  const geoLocation = {
    center: {
      lat: lat,
      lng: long,
    },
    zoom: 11,
  };

  return (
    <>
      <div style={{ height: "500px", width: "800px" }}>
        <input
          onKeyUp={handleSearch}
          type="text"
          placeholder="Find your place on Map"
        />
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAnEvfM0IngnOKFwIYceNYpLWIQk5vYeaw" }}
          center={geoLocation.center}
          defaultZoom={geoLocation.zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
