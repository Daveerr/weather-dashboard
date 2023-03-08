let weather = {
  "api key": "a315f2fee187d6f670764e238eb2c822",
};

//For Temp
const cityTemp = document.getElementById("temp");
const apiKey = "a315f2fee187d6f670764e238eb2c822";
fetch(
  `https://api.openweathermap.org/data/2.5/weather?lat=37.7749&lon=-122.4194&appid=${apiKey}&units=imperial`
)
  .then(function (response) {
    return response.json();
  })

  .then(function (data) {
    cityTemp.innerHTML = data.main.temp;
    console.log(data);
  });
//Date
