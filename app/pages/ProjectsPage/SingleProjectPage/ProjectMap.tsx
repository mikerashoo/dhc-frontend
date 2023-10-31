import React, { FC } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const locationLink = "https://maps.google.com/?q=51.5074,-0.1278";

const ProjectMap: FC<any> = ({ locationLink }) => {
  const [coordinates, setCoordinates] = React.useState({ lat: 0, lng: 0 });
  const [address, setAddress] = React.useState<string>("");
  console.log(locationLink);
  React.useEffect(() => {
    const coordinatesMatch = locationLink.match(/q=([-0-9.]+),([-0-9.]+)/);
    if (coordinatesMatch && coordinatesMatch.length === 3) {
      const latitude = parseFloat(coordinatesMatch[1]);
      const longitude = parseFloat(coordinatesMatch[2]);
      console.log(latitude, longitude);
      setCoordinates({ lat: latitude, lng: longitude });
    }
  }, []);
  const mapOptions = {
    zoom: 15,
    language: "en",
  };
  return (
    <div className="sproject__about sproject__map">
      {coordinates.lat === 0 && coordinates.lng === 0 ? (
        <div className="">
          <div className="sproject__overview-title">Location</div>
          <div>{locationLink}</div>
        </div>
      ) : (
        <div style={{ width: "711px", height: "400px", position: "relative" }}>
          <LoadScript googleMapsApiKey="Ваш_API_ключ">
            <GoogleMap
              options={mapOptions}
              center={coordinates}
              mapContainerStyle={{
                width: "100%",
                height: "100%",
                borderRadius: "6px",
              }}
            >
              <Marker position={coordinates} />
            </GoogleMap>
          </LoadScript>
        </div>
      )}
    </div>
  );
};

export default ProjectMap;
