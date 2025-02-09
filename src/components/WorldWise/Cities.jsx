import { Link } from "react-router-dom";

const Cities = ({ cities, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {cities.map((city) => (
        <div key={city.id}>
          <hr />
          <Link to={city.id}>
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
