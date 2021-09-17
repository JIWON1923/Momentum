const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;// submit 되지만 새로고침은 되지 않음을 확인할 수 있음.
    console.log(userName);
}

// argument, 이벤트에 대한 모든 정보를 제공하는 공간.
// function onLoginSubmit(event){
//     event.preventDefault(); //기본 행동이 동작되지 않도록 막아주는 함수.
//     console.log(event);
// }

loginForm.addEventListener("submit", onLoginSubmit) // submit은 검증 후, Enter 또는 Button을 누를 때 발생.