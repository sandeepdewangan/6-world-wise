import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";

import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  // const navigate = useNavigate();

  // const lat = searchParam.get("lat");
  // const lng = searchParam.get("lng");
  const position = [51.505, -0.09];

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
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
