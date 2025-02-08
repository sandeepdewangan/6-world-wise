const Countries = ({ cities, isLoading }) => {
  if (isLoading) return <p>Loading...</p>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((e) => e.country).includes(city.country)) {
      return [...arr, { country: city.country, flag: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  console.log(countries);

  return countries.map((item, index) => (
    <p key={index}>
      {item.country} {item.flag}
    </p>
  ));
};

export default Countries;
