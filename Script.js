const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"; // string만 저장할 땐 대문자로 쓰는게 좋다. hidden이 두 번 이상 나오니 변수로 만든다.

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;// submit 되지만 새로고침은 되지 않음을 확인할 수 있음.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello " + userName;
    greeting.innerText = `Hello ${userName}`;
}
loginForm.addEventListener("submit", onLoginSubmit) // submit은 검증 후, Enter 또는 Button을 누를 때 발생.