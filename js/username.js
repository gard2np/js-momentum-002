const userInputForm = document.querySelector("#userform");
const inputNanme = document.querySelector("#userform input");
const welcomeUser = document.querySelector(".welcome_user");

//string 저장 //
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function clickSubmit(event) {
	event.preventDefault();
	const username = inputNanme.value;
	localStorage.setItem(USERNAME_KEY, username);
	greeting(username);
}

function greeting(username) {
	welcomeUser.innerText = `Welcome ${username}`;
	welcomeUser.classList.remove(HIDDEN_CLASSNAME);
	userInputForm.classList.add(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
	userInputForm.classList.remove(HIDDEN_CLASSNAME);
	userInputForm.addEventListener("submit", clickSubmit);
} else {
	greeting(savedUsername);
}
