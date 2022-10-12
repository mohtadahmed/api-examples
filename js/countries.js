const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => disaplayCountries(data))
}


const disaplayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-list')
        countryDiv.innerHTML = `
            <h2 class="country-name">${country.name.official} ${country.flag}</h2>
            <p>Known Name: ${country.name.common}</p>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <button class="btn-details" onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `
        countriesContainer.appendChild(countryDiv);
    });
}


const loadCountryDetails = countryCode => {
    const url = `https://restcountries.com/v3.1/alpha/${countryCode}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

const displayCountryDetail = country => {
    const countryDetail = document.getElementById('country-details');
    const countryDetailDiv = document.createElement('div');
    countryDetailDiv.innerHTML = `
        <h2>Official Name: ${country.name.official}</h2>
        <h3>Known As: ${country.name.common}</h3>
        <img src="${country.flags.png}">
        <p>Population: ${country.population}</p>
        <hr>
    `
    countryDetail.appendChild(countryDetailDiv)
}

loadCountries();