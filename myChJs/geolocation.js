

const myApi = '31ad6b24e3c0b79223ea0d53286017e9'
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${myApi}`
    fetch(weatherUrl)
    .then(Response => Response.json())
    .then((data) => {
        const weatherbox = document.querySelector(".geolocation span:first-child");
        const city = document.querySelector(".geolocation span:last-child");
        weatherbox.innerHTML = data.weather[0].main;
        city.innerHTML = data.name
         
    });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}



navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);