function onGeoSuccess(position){ // CurrentPosition 성공 시 실행되는 함수
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
}
function onGeoError(){ // CurrentPosition Error 발생 시 실행되는 함수
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

// openweathermap.org