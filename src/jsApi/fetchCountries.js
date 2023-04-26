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

export function reset() {
  info.innerHTML = '';
  list.innerHTML = '';
}

export function iterationAllCountris(countrisAll) {
  if (input.value.trim() === '') {
    return;
  }

  return countrisAll.filter(item => {
    return (
      item.name.official
        .toLowerCase()
        .indexOf(input.value.toLowerCase().trim()) > -1
    );
  });
}
