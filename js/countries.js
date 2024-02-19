
// Fetch the list of countries from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesSelect = document.getElementById('countries');

    // Loop through the data and add options to the select element
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.text = country.name.common;
      countriesSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));



// Fetch the list of countries from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesSelect = document.getElementById('Ccountry');

    // Loop through the data and add options to the select element
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.text = country.name.common;
      countriesSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));


// Fetch the list of countries from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesSelect = document.getElementById('editCountries');

    // Loop through the data and add options to the select element
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.text = country.name.common;
      countriesSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));
// Fetch the list of countries from the Restcountries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countriesSelect = document.getElementById('editCcountry');

    // Loop through the data and add options to the select element
    data.forEach(country => {
      const option = document.createElement('option');
      option.value = country.name.common;
      option.text = country.name.common;
      countriesSelect.appendChild(option);
    });
  })
  .catch(error => console.error('Error fetching countries:', error));
