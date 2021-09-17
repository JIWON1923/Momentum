const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${userName}`;
    localStorage.setItem("userName", userName); // local Storage에 userName 키 값에 입력받은 value를 저장. Application tab에서 확인
}
loginForm.addEventListener("submit", onLoginSubmit)