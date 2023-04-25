import {
  fetchCountries,
  refs,
  list,
  info,
  input,
} from './jsApi/fetchCountries.js';
import { showListCountris, showInfoCountry } from './jsApi/pattern.js';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
function getCountry(event) {
  fetchCountries(refs.URLCountryBek)
    .then(iterationAllCountris)
    .then(iterationCountry)
    .then(renderCountis)
    .catch(() => Notiflix.Notify.failure('sory'));
}

input.addEventListener('input', debounce(getCountry, 300));

function iterationAllCountris(countrisAll) {
  if (input.value === '') {
    return '';
  }

  return countrisAll.filter(item => {
    return (
      item.name.official
        .toLowerCase()
        .indexOf(input.value.toLowerCase().trim()) > -1
    );
  });
}
function iterationCountry(countris) {
  console.log(countris);
  if (countris.length === 0) {
    return Notiflix.Notify.failure('Oops, there is no country with that name');
  }

  if (countris.length > 10) {
    return Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  }

  if (countris.length > 1 && countris.length <= 10) {
    return countris.map(item => {
      return showListCountris(item.flags.svg, item.name.official);
    })
  }
}

function renderCountis(country) {
  console.log(country);
  
}
