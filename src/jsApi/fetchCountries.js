export function fetchCountries(name) {
  return fetch(name).then(res => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
