export function showListCountris(flag, alt, country) {
  return `
  <li>
    <img src="${flag}" alt="${alt}" width="30" height="20">
    ${country}
  </li>`;
}

export function showInfoCountry(country) {
  const { capital, population, languages } = country;
  const lang = Object.values(languages);

  return `
  <p class="title-info">
    <span class="about-country">Capital:</span>
    ${capital}
  </p>
  <p class="title-info">
    <span class="about-country">Population:</span>
    ${population}
  </p>
  <p class="title-info">
    <span class="about-country">Languages:</span>
    ${lang}
  </p>
  `;
}
