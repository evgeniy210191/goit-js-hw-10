import {
  fetchCountries,
  refs,
  list,
  info,
  input,
} from './jsApi/fetchCountries.js';
import { showListCountry } from './jsApi/pattern.js';
import Notiflix from 'notiflix';

function getCountry(event) {
  fetchCountries(refs.URLCountryBek)
    .then(iterationAllCountris)
    .then(iterationCountry)
    .then(renderCountis)
    .catch(() => Notiflix.Notify.failure('Qui timide rogat docet negare'));
}
input.addEventListener('input', getCountry);

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
  for (const country of countris) {
    if (countris.length > 1) {
      return showListCountry(country.flags.svg, country.name.official);
    }
  }
}

function renderCountis(country) {
  console.log(country);
}
