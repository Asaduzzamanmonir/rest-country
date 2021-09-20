const loadCountries = () => {
    const restUrl = `https://restcountries.eu/rest/v2/all`
    fetch(restUrl)
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()


const displayCountries = countries => {
    // console.log(countries);
    const container = document.getElementById('countries')
    const countryHTML = countries.map(country => getCountryHTML(country))
    container.innerHTML = countryHTML.join(' ')
}

const getCountryHTML = (country) => {
    const { name, capital, flag } = country;
    return `
        <div class="country">
            <h2>${name}</h2>
            <h4>Capital: ${capital}</h4>
            <img src="${flag}">
        </div>
    `;
}