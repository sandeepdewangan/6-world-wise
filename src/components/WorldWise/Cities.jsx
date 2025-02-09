import { Link } from "react-router-dom";
import { useCities } from "../../context/CityProvider";

const Cities = () => {
  const { cities, isLoading } = useCities();
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {cities.map((city) => (
        <div key={city.id}>
          <hr />
          <Link
            to={`${city.id}?lat=${city.position.lat}&lng=${city.position.lng}`}
          >
            <p>
              {city.emoji} {city.cityName}
            </p>
            <p>{city.date}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cities;
