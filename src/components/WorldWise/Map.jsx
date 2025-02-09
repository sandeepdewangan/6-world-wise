import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const navigate = useNavigate();

  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div onClick={() => navigate("form")}>
      <h1>Map</h1>
      <p>
        Lat: {lat} Lng: {lng}
      </p>
    </div>
  );
};

export default Map;
