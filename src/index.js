import { fetchCountries } from './jsApi/fetchCountries.js';
import {
  refs,
  list,
  info,
  input,
  reset,
  iterationAllCountris,
} from './jsApi/data.js';
import { showListCountris, showInfoCountry } from './jsApi/pattern.js';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');
function getCountry(event) {
  fetchCountries(refs.URLCountryBek)
    .then(iterationAllCountris)
    .catch(() => Notiflix.Notify.failure('here'))
    .then(iterationCountry)
    .catch(() => Notiflix.Notify.failure('sory'));
}

input.addEventListener('input', debounce(getCountry, 300));

function iterationCountry(countris) {
  if (!countris) {
    reset();
    return;
  }
  if (countris.length === 0) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
    reset();
  }

  if (countris.length > 1 && countris.length <= 10) {
    reset();
    if (list.classList.contains('title-country')) {
      list.classList.remove('title-country');
    }
    render(countris);
  }

  if (countris.length > 10) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    reset();
  }

  if (countris.length === 1) {
    reset();
    if (!list.classList.contains('title-country')) {
      list.classList.add('title-country');
    }
    render(countris);
    renderOneCoutry(countris);
  }
}

function render(country) {
  const renderCountis = country
    .map(item => {
      return showListCountris(item.flags.svg, item.name.official);
    })
    .join('');
  list.insertAdjacentHTML('beforeend', renderCountis);
}

function renderOneCoutry(country) {
  info.insertAdjacentHTML('beforeend', showInfoCountry(...country));
}
