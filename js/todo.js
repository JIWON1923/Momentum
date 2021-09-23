const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // todo-form 내에 있는 input 찾기
//const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

/** 리스트가 추가는 되지만, 새로고침하면 입력했던 모든 정보가 사라지는 문제 */
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span"); // list check button도 만들것이기 때문에 span 추가 
    li.appendChild(span); // li 안에 span 선언
    span.innerText=newTodo; // span의 Text = input.value
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = ""; // enter 누를 때 input text 창을 비우게 만듦.
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);