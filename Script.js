const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function onLoginBtnClick(){ // update ! username의 유효성 확인 과정 (공백이거나 너무 길거나.)
    //const userName = loginInput.value;
    //if (userName == ""){ //HTML의 input type을 require이라고 설정
    //    alert("Please write your name."); 
    //} else if(userName.length > 15){ // input의 maxlength=15로 설정.
    //    alert("Your name is too long.");
    //} 단!!! 위를 사용하기 위해서는 div 클래스가 아닌 form 을 사용해야한다. 단 submit될 때 마다 페이지 새로고침되는 문제 발생.
 }
loginButton.addEventListener("click", onLoginBtnClick); // Click 감지