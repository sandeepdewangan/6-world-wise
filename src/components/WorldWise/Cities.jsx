const Cities = ({ cities, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      {cities.map((city) => (
        <div key={city.id}>
          <hr />
          <p>
            {city.emoji} {city.cityName}
          </p>
          <p>{city.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Cities;
