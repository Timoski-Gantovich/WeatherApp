function weather(cityID) {
  var key = "cd71b381a8cede24534272a932e79c73";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      cityID +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      getWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weather(5604353);
};
function getWeather(d) {
  var fahrenheit = Math.round((parseFloat(d.main.temp) - 273.15) * 1.8 + 32);

  document.getElementById("description").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML = fahrenheit + "&deg;";
  document.getElementById("location").innerHTML = d.name;
}
