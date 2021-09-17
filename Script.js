//const loginForm = document.querySelector("#login-form"); //HTML element. 이걸 없애고 한 줄로 코딩할 수 있음.
//const loginInput = loginForm.querySelector("input");
//const loginButton = loginForm.querySelector("button");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(){
    // input value가 공백이어도 Button이 성공적으로 눌리는 문제점이 있음.
    console.dir(loginInput); //  value에 값이 있음을 확인할 수 있음.
    console.log("Click!!");
 }
loginButton.addEventListener("click", onLoginBtnClick); // Click 감지