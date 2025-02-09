import { useSearchParams } from "react-router-dom";

const Map = () => {
  const [searchParam, setSearchParam] = useSearchParams();
  const lat = searchParam.get("lat");
  const lng = searchParam.get("lng");

  return (
    <div>
      <h1>Map</h1>
      <p>
        Lat: {lat} Lng: {lng}
      </p>
    </div>
  );
};

export default Map;
