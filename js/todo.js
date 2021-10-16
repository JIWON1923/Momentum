const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // todo-form 내에 있는 input 찾기
const toDoList = document.getElementById("todo-list");
const button = document.createElement("button");

const toDos = []; // todo list 저장을 위한 배열 선언

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos)); //localStorage에 저장만하는 함수.
}
function paintTodo(newTodo){ // Todo 생성할 때 마다 toDos에 push : handelToDoSubmit 확인 
    const li = document.createElement("li");
    const span = document.createElement("span"); 
    const button = document.createElement("button");
    span.innerText=newTodo;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}
function deleteToDo(event){
    const li = event.target.parentElement; // 삭제 할 list (event의 부모)
    li.remove();
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo); // 입력받은 값을 todos에 저장
    paintTodo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);