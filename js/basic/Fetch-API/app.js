//The Fetch api provides fetch() method defined on the window object, which you can use to perform requests.

//this method returns a Promise that you can use to retrieve the response of the request

//its a covid19 api ->take from gfg
// fetch('https://disease.sh/v3/covid-19/countries')
// .then( function(apiData){
//    //console.log(apiData)   //its a json data but ise convert krna pdega js object me through json() method
//    return apiData.json(); // Convert the response to JSON
// })
// .then( function(actualCovertData){
//     console.log(actualCovertData)
// })
// .catch( function(error){
//     console.log(error)
// })


//fatch covid19 data of country = India 

fetch('https://disease.sh/v3/covid-19/countries')
  .then(function (response) {
    return response.json();
  })
  .then(function (countriesData) {
        // Find data for India
    // Assuming countriesData is an array
    //const indiaData = countriesData.find(country => country.country === 'India');
    const indiaData = countriesData.find(country => {
        if (country.country === 'India') {
            return country;
        }
    });
    
    if (indiaData) {
        console.log('COVID-19 Data for India:', indiaData);
        console.log('Total Cases in India:', indiaData.cases);
        console.log('Total Deaths in India:', indiaData.deaths);
        // Add more fields as needed
    } 
    else {
        console.log('Data for India not found.');
    }
  })
  .catch(function (error) {
     console.log(error);
  });