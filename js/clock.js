const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock(); // interval을 실행하기까지 1초를 기다려야하기 때문에 우선 1개 실행
setInterval(getClock, 1000); // 매 초마다 Date Object 생성