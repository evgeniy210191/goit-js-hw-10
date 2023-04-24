import { fetchCountries, refs, list, info, input } from './jsApi/fetchCountries.js';


fetchCountries(refs.URLCountryBek).then(renderCountry);

function renderCountry(country) {
  console.log(country);
  
  return country.map(item => {
    console.log(item.flags.png);
    
  })
};