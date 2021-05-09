// *Your* API KEY
const APIKEY = "cd71b381a8cede24534272a932e79c73";
const city = "Post Falls";
const state = "Idaho";
const url = `https://api.openweathermap.org/data/2.5/weather?q={city},{state}&appid={API key}&units=imperial`;

// check-check
console.log(url);

// Using fetch to get data
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    // check-check
    console.log(data.main.temp);

    const c = document.querySelector(".city");
    const temp = document.querySelector(".temp");

    c.textContent = data.name;
    temp.textContent = data.main.temp;
  });
