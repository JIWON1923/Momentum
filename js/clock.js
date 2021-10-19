const clock = document.querySelector("h1#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); //Number를 반환하므로 형변환
    const minuites = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minuites}:${seconds}`;
}

getClock(); // interval을 실행하기까지 1초를 기다려야하기 때문에 우선 1개 실행
setInterval(getClock, 1000); // 매 초마다 Date Object 생성