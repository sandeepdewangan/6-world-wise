import { useCities } from "../../context/CityProvider";

const Countries = () => {
  // STEP 03
  const { cities, isLoading } = useCities();
  if (isLoading) return <p>Loading...</p>;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((e) => e.country).includes(city.country)) {
      return [...arr, { country: city.country, flag: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return countries.map((item, index) => (
    <p key={index}>
      {item.country} {item.flag}
    </p>
  ));
};

export default Countries;
