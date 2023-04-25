export function showListCountris(flag, country) {
  return `
  <li>
    <svg width="20" height="15">
      <use xlink:href="${flag}"></use>
    </svg>${country}
  </li>`;
}

export function showInfoCountry(country) {
  const { capital, population, languages, flag, name } = country;
  return `
  <p class="title-country">
    <svg width="20" height="15">
      <use xlink:href="${flag}"></use>
    </svg>${name.official}
  </p>
  <p class="title-info">
    <span class="about-country">${capital}:</span>
    ${capital}
  </p>
  <p class="title-info">
    <span class="about-country">${population}:</span>
    ${population}
  </p>
  <p class="title-info">
    <span class="about-country">${languages}:</span>
    ${languages}
  </p>
  `;
}
