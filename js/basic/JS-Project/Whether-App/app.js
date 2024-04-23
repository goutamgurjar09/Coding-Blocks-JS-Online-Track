let inputCity = document.querySelector('#city');
let div =  document.querySelector('#weatherInfo');
let errorMsgDiv = document.querySelector('#errorMsg');

const ApIkey = "83f97b814ba012fa734c4774a01cd2f1";


function getWhetherInfo(){
    let cityName = inputCity.value;
    const APIURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${ApIkey}`;
    fetch(APIURL)
    .then((res)=>{
        // Check if the response status is OK (200)
        if (!res.ok) {
            // throw new  Error(`Pls type Valid City not found : ${res.statusText}`);
            throw new Error('Pls type Valid City not found');
        }
        //console.log(res);
        return res.json();
    })
    .then((data)=>{
       // console.log(data);
       div.innerHTML = `
        <h3>City: ${data.name}</h3>
        <h4>Temprature: ${data.main.temp} &deg;C</h4>
        <h5>Humidity: ${data.main.humidity} %</h5>
        <h6>Wind Speed: ${data.wind.speed} m/s</h6> 
    `
        errorMsgDiv.innerText = " "
        inputCity.value = " ";
    }) 
    .catch((error) => {
       // console.log('Error fetching weather data:', error);
       div.innerHTML = " ";
       errorMsgDiv.innerText = `${error}`
    //    inputCity.value = " ";

    });
    
    
}


