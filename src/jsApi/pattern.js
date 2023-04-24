export function showListCountry(flag, country) {
  return `
  <li>
    <svg width="20" height="15">
      <use xlink:href="${flag}"></use>
    </svg>${country.official}
  </li>`; 
};