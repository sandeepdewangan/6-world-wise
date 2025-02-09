import { useParams } from "react-router-dom";
import { useCities } from "../../context/CityProvider";
import { useEffect } from "react";

const City = () => {
  const { id } = useParams();
  const { currentCity, getCityById } = useCities();
  console.log(currentCity, id);

  useEffect(
    function () {
      getCityById(id);
    },
    [id]
  );

  return (
    <div>
      <p>
        {currentCity.cityName} {currentCity.emoji}
      </p>
      <p>{currentCity.notes}</p>
    </div>
  );
};

export default City;
