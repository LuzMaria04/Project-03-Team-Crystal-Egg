let data = d3.json('AirQuality.resources.json');
console.log(data)




d3.json('AirQuality.resources.json').then(data => {
    // Specify the country you want to retrieve the values for
    const targetCity = 'Hotan'; // Replace with the desired country
  
    // Find the entry for the specified country
    /*const countryEntry = data.find(entry => entry.Country === targetCountry);
  
    if (countryEntry) {
      // Access the values for Country and Population
      const valueForCountry = countryEntry.Country;
      const valueForPopulation = countryEntry.Population;
      const valueForYear = countryEntry.Year;
  
      // Log the results or use them as needed
      console.log(`Country: ${valueForCountry}, Population: ${valueForPopulation}`);
      console.log(`Country: ${valueForCountry}, Year: ${valueForYear}`);
    } else {
      console.log(`${targetCountry} not found in the data.`);
    }
    }).catch(error => {
    console.error('Error loading JSON file:', error); */


      // Filter entries for the specified country
    const matchingEntries = data.filter(entry => entry.City === targetCity);

  if (matchingEntries.length > 0) {
    // Log the values for each instance of the country, including the new 'Year'
    matchingEntries.forEach(entry => {
      const valueForCity = entry.City;
      const valueForPollution = entry["Air Pollution"];
      const valueForYear = entry.Year; // New value for 'Year'
      console.log(`City: ${valueForCity}, Year: ${valueForYear}, Air Pollution: ${valueForPollution}`);
    });
  } else {
    console.log(`${targetCity} not found in the data.`);
  }
}).catch(error => {
  console.error('Error loading JSON file:', error);
});





/* function demoInfo(sample)
{
    d3.json('AirQuality.resources.json').then((data) => {
        let metadata = data.metadata;
        console.log(metadata[1]);

        function CountryTest(metadata){
            if (metadata.Country = "BANGLADESH")
                return "Bangladesh";
            else
                return "No Country Available";
        }

    })
    
} */

