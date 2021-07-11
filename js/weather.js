const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");
const API_KEY = "e8b6741cc821b6a402332b6ffa6ca835";

function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	const URL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
	fetch(URL)
		.then((response) => response.json())
		.then((data) => {
			city.innerText = data.name;
			weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
		});
}
function onGeoError() {
	alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
