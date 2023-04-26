export function fetchCountries(name) {
  return fetch(name).then(res => {
    return res.json();
  });
}


