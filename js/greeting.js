const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
//const greeting = document.querySelector("#greeting");
const greeting = document.querySelector("#todo-form input");
const toDo = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function onLoginSubmit(event){
    const inputUserName = loginInput.value;
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, inputUserName);
    paintGreeting(inputUserName);
}

function paintGreeting(userName){
    //greeting.innerText = `${userName}의 할 일!`;
    //greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.placeholder = `${userName}의 할 일`;
    toDo.classList.remove(HIDDEN_CLASSNAME);
}
const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName == null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else{
    paintGreeting(savedUserName);
}
