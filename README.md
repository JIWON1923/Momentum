# Momentum
Todo Web site (HTML, CSS, JavaScript)

## Initial Screen
<img width="80%" alt="initial" src="https://user-images.githubusercontent.com/68676844/138104758-2a827f3b-0d06-4215-89c1-adb166df136a.png">
### Clock
시간을 형식에 맞춘 후, setInterval을 통해 1초마다 시간을 갱신한다.

```javascript:clock.js

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minuites = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minuites}:${seconds}`;
}
getClock();
setInterval(getClock, 1000);
```

### Weather
openweathermap의 Current Weather Data를 사용하여 온도, 날씨, 지역을 표기한다.
## Login
<img width="80%" alt="login" src="https://user-images.githubusercontent.com/68676844/138104863-2cc3ea77-7280-41aa-953d-0e97d5f20142.png">
User가 이름을 등록하면, Login 입력창을 숨기고, 할 일 입력 창을 띄운다.

```javascript:greeting.js

function paintGreeting(userName){
    //greeting.innerText = `${userName}의 할 일!`;
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.placeholder = `${userName}의 할 일`;
    toDo.classList.remove(HIDDEN_CLASSNAME);
}
```

## New To do
<img width="1440" alt="newToDo" src="https://user-images.githubusercontent.com/68676844/138114158-ca268d7b-7cf0-43e7-a03b-f5665f225574.png">

## Refresh
<img width="80%" alt="refresh1" src="https://user-images.githubusercontent.com/68676844/138114450-b243fa76-f3a0-42c4-809f-be07435bb0cb.png">
<img width="80%" alt="refresh2" src="https://user-images.githubusercontent.com/68676844/138114455-71e671df-d39b-4cfc-a20c-b3b09c3f58ac.png">
### Random Background and Quote.

```javascript:backgroud.js

const images = ["BG_01.jpg", "BG_02.jpg", "BG_03.jpg", 
                "BG_04.jpg", "BG_05.jpg", "BG_06.jpg",
                "BG_07.jpg","BG_08.jpg","BG_09.jpg"];
const chosenImages = images[Math.floor(Math.random() * images.length)];
```

Math 모듈을 사용하여 새로고침할 때마다 사진, 인용구를 랜덤으로 바꾼다.
### Local Storage
User 이름, 할 일 등을 Local Storage에 저장하여, 새로고침을 하더라도 초기화되지 않도록 한다.

```javascript:greeting.js

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName == null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else{
    paintGreeting(savedUserName);
}
```

## Mouse over
<img width="80%" alt="mousePointer" src="https://user-images.githubusercontent.com/68676844/138114576-b530fee8-86b5-4f1d-8535-405cfc939f2a.png">
X에 포인터를 올리면, 마우스의 모양을 손가락 모양으로 바꾸어 직관성을 높인다.

```css:style.css

button:hover{
    cursor : pointer;
}
```
