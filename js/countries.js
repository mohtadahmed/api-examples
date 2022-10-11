const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => disaplayCountries(data))
}


const disaplayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country-list')
        countryDiv.innerHTML = `
            <h2 class="country-name">${country.name.official} ${country.flag}</h2>
            <img src="${country.flags.png}">
            <p>Known Name: ${country.name.common}</p>
            <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</p>
            <p>Population: ${country.population}</p>
        `
        countriesContainer.appendChild(countryDiv);
    });
}

loadCountries();