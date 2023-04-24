import {
  fetchCountries,
  refs,
  list,
  info,
  input,
} from './jsApi/fetchCountries.js';
import { showListCountry } from './jsApi/pattern.js';

function getCountry(event) {
  fetchCountries(refs.URLCountryBek)
    .then(renderCountry)
    .then(x)
    .catch(() => console.log('no country'));
}
input.addEventListener('input', getCountry);

function renderCountry(countrisAll) {
  return countrisAll
    .map(item => {
      if (input.value === '') {
        return '';
      }
      if (
        item.name.official
          .toLowerCase()
          .indexOf(input.value.toLowerCase().trim()) > -1
      ) { 
        return showListCountry(item.flags.svg, item.name);
      }
    })
    .join('');
}
function x(res) {
  list.innerHTML = res
}
