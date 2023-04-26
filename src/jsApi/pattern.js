export function showListCountris(flag, country) {
  return `
  <li>
    <svg width="30" height="20">
      <use xlink:href="${flag}"></use>
    </svg>${country}
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
