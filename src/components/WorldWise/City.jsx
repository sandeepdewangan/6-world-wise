import { useParams } from "react-router-dom";
import { useCities } from "../../context/CityProvider";
import { useEffect } from "react";
import BackButton from "../commons/BackButton";

const City = () => {
  const { id } = useParams();
  const { currentCity, getCityById, isLoading } = useCities();

  useEffect(
    function () {
      getCityById(id);
    },
    [id]
  );

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <p>CITY</p>
      <p>
        {currentCity.cityName} {currentCity.emoji}
      </p>
      <p>{currentCity.notes}</p>
      <BackButton>Back</BackButton>
    </div>
  );
};

export default City;
