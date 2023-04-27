import { fetchCountries } from './jsApi/fetchCountries.js';
import {
  refs,
  list,
  info,
  input,
  reset,
} from './jsApi/element.js';
import { showListCountris, showInfoCountry } from './jsApi/pattern.js';
import Notiflix from 'notiflix';
var debounce = require('lodash.debounce');

function getCountry(event) {
  if (input.value.trim() === '') {
    return;
  }
  fetchCountries(refs.URLCountryBek)
    .then(iterationCountry)
    .catch(res => {
      console.log(res);
      Notiflix.Notify.failure('here');
    })
}

input.addEventListener('input', debounce(getCountry, 300));

function iterationCountry(countris) {
  const countrisAll = countris.filter(item => {
    return (
      item.name.official
        .toLowerCase()
        .indexOf(input.value.toLowerCase().trim()) > -1
    );
  });

  if (countrisAll.length === 0) {
    Notiflix.Notify.failure('Oops, there is no country with that name');
    reset();
  }

  if (countrisAll.length > 1 && countrisAll.length <= 10) {
    reset();
    if (list.classList.contains('title-country')) {
      list.classList.remove('title-country');
    }
    render(countrisAll);
  }

  if (countrisAll.length > 10) {

    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
    reset();
  }

  if (countrisAll.length === 1) {
    reset();
    if (!list.classList.contains('title-country')) {
      list.classList.add('title-country');
    }
    render(countrisAll);
    renderOneCoutry(countrisAll);
  }
}

// render

function render(country) {

  const renderCountis = country
    .map(item => {
      return showListCountris(
        item.flags.svg,
        item.flags.alt,
        item.name.official
      );
    })
    .join('');
  list.insertAdjacentHTML('beforeend', renderCountis);
}

function renderOneCoutry(country) {
  info.insertAdjacentHTML('beforeend', showInfoCountry(...country));
}
