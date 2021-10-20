const API_KEY = "89cd80c4f68758e0b8da47943851ab85";
function onGeoSuccess(position){ // CurrentPosition 성공 시 실행되는 함수
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        const name = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}℃`;
        city.innerText = `\n${name}`;
    });
}
function onGeoError(){ // CurrentPosition Error 발생 시 실행되는 함수
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

// openweathermap.org -> API menu -> Current Weather Data
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
