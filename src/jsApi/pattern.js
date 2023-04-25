export function showListCountris(flag, country) {
  return `
  <li>
    <svg width="20" height="15">
      <use xlink:href="${flag}"></use>
    </svg>${country}
  </li>`; 
};

export function showInfoCountry(country) {
  const { capital, population, languages } = country;
  return `
    <p class="title-info">capital<span class="about-country">${capital}</span></p>
    <p class="title-info">population<span class="about-country">${population}</span></p>
    <p class="title-info">languages<span class="about-country">${languages}</span></p>
  `;
};