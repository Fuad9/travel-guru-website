import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import places from "../fakeData/places";
// import hotelData from "../fakeData/hotelData";

const Map = (props) => {
  // to search location
  // const [placeLocation, setPlaceLocation] = useState({});

  // showing map directly
  const placeLocation = places.find((place) => place.id === props.id);

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   const searchText = event.target.value.toLowerCase();
  //   const matched = places.find(
  //     (item) =>
  //       item.id.toLowerCase().includes(searchText) ||
  //       item.title.toLowerCase().includes(searchText)
  //   );
  //   setPlaceLocation(matched);
  // };

  // const searchPlace = (<input
  //   className="form-control mt-3 w-75"
  //   onKeyUp={handleSearch}
  //   type="text"
  //   placeholder="Find your place on Map"
  // />)

  const { lat, long } = placeLocation;

  const geoLocation = {
    center: {
      lat: lat,
      lng: long,
    },
    zoom: 11,
  };

  return (
    <>
      <div
        style={{ height: "700px", width: "500px" }}
        className="col-9 col-md-6 col-lg-6"
      >
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyAnEvfM0IngnOKFwIYceNYpLWIQk5vYeaw",
          }}
          center={geoLocation.center}
          defaultZoom={geoLocation.zoom}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
