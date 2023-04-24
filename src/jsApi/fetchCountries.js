export function fetchCountries(name) {
  return fetch(name).then(res => {
    return res.json();
  });
}

export const refs = {
  URLCountryBek: `https://restcountries.com/v3.1/all?fields=name,capital,population,flags,languages`,
  DEBOUNCE_DELAY: 300,
};

export const [list, info, input] = [
  '.country-list',
  '.country-info',
  '#search-box',
].map(item => document.querySelector(item));
