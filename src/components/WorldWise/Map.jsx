import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useCities } from "../../context/CityProvider";
import { useEffect, useState } from "react";

const Map = () => {
  const [searchParam] = useSearchParams();
  const { cities } = useCities();
  const [position, setPosition] = useState([40, 0]);
  // const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  useEffect(
    function () {
      if (lat && lng) setPosition([lat, lng]);
    },
    [lat, lng]
  );

  return (
    // <div onClick={() => navigate("form")}>
    <div
      style={{
        flex: "1",
        height: "500px",
        width: "500px",
        position: "relative",
      }}
    >
      <MapContainer
        center={position}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}
          >
            <Popup>{city.notes}</Popup>
          </Marker>
        ))}
        <ChangeCenter position={position} />
      </MapContainer>
    </div>
  );
};

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}

export default Map;
