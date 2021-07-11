const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

//sting저장//
const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
	localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //array 형태로 저장//
}

function deleteTodo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveTodos();
}

function paintTodo(newTodoObj) {
	const li = document.createElement("li");
	li.id = newTodoObj.id;
	const span = document.createElement("span");
	span.innerText = newTodoObj.text;
	const button = document.createElement("button");
	button.innerText = "❌";
	button.addEventListener("click", deleteTodo);
	li.appendChild(span);
	li.appendChild(button);
	todoList.appendChild(li);
}

function todoSubmit(event) {
	event.preventDefault();
	const newTodo = todoInput.value;
	todoInput.value = "";
	const newTodoObj = {
		text: newTodo,
		id: Date.now(),
	};
	toDos.push(newTodoObj);
	paintTodo(newTodoObj);
	saveTodos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY); //저장된 걸 변수로 설정//

if (savedTodos !== null) {
	const parsedTodos = JSON.parse(savedTodos); //array 형태를 진짜 array로 저장//
	toDos = parsedTodos; //toDas라는 arrya let에다가 저장된거를 넣는 작업//
	parsedTodos.forEach(paintTodo);
}
