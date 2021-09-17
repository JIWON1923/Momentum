const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName"; // 오타가 날 수 있으니 두 개 이상은 반드시 변수로 선언.

function onLoginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //greeting.innerText = `Hello ${userName}`;
    //localStorage.setItem(USERNAME_KEY, userName); 
    paintGreeting(userName);
}

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName == null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else{
    // show the greetings
    //greeting.innerText = `Hello ${savedUserName}`; // 중복되는 부분이므로 함수로 만든다.
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    paintGreeting(savedUserName);
}
