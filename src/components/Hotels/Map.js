import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import places from "../fakeData/places";

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 24.3083,
      lng: 91.7333,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "500px", width: "800px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAnEvfM0IngnOKFwIYceNYpLWIQk5vYeaw" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        ></GoogleMapReact>
      </div>
    );
  }
}

export default Map;
