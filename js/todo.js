const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input"); // todo-form 내에 있는 input 찾기
const toDoList = document.getElementById("todo-list");
const button = document.createElement("button");

const TODOS_KEY = "todos";
//const toDos = [];
let toDos = []; // 새로고침할 때 저장소 비워짐. 이를 해결하기 위해 업데이트 가능하도록 Let으로 변경

function saveToDos(){
    localStorage.setItem(TODOS_KEY ,JSON.stringify(toDos)); //localStorage에 저장만하는 함수.
}
function paintTodo(newTodo){ // Todo 생성할 때 마다 toDos에 push : handelToDoSubmit 확인 
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span"); 
    const button = document.createElement("button");
    span.innerText=newTodo.text;
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li);
}
function deleteToDo(event){
    const li = event.target.parentElement; // 삭제 할 list (event의 부모)
    li.remove();
    toDos = toDos.filter((todo) => todo.id != parseInt(li.id) ); // 함수를 1줄로 표현
    saveToDos();
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        id:Date.now(), //Random 값으로 id 지정
        text:newTodo
    };
    toDos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parsedToDos = JSON.parse(savedToDos); // string을 Object(배열)로 변환
    toDos = parsedToDos; // 업데이트 시 초기화되지 않도록
    parsedToDos.forEach(paintTodo);
}