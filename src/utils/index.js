export function getAllCities(data) {
  let cities = [];
  data.data.map((e) => {
    e.cities.map((city) => cities.push(city));
  });
  return cities;
}
