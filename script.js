
// Declaration and Initialisation.
var input = document.getElementById('userInput');
var buttonOne = document.getElementById('ADD');
var reset = document.getElementById('reset');
var ul = document.querySelector('ul');

// Code to add on list
function inputLength() {
	return input.value.length;
}

function createListElement() {
	
	var li = document.createElement('li');
	li.appendChild(document.createTextNode(input.value));
	li.setAttribute("class","animated fadeInUp");
	li.setAttribute("style","animation-delay: 0s;");
	ul.appendChild(li);
	
	var button = document.createElement('button');
	button.innerHTML = "Delete";
	button.setAttribute("style","background-color: #000000; color: red; border-radius: 12px;");
	button.setAttribute("id","delete");
	ul.appendChild(button);
	
	input.value = "";
	
	li.addEventListener('click', taskComplete);
	button.addEventListener('click', deleteListElement);
}

// To Reset wrong input.
function resetListElement() {
	input.value = "";
}

// To strike-through completed task.
function taskComplete() {
	var taskDone = document.querySelector('li');
	taskDone.setAttribute("style","text-decoration:line-through;");
}

// To delete completed task.
function deleteListElement() {
	var deleteItem = document.querySelector('li');
	deleteItem.parentNode.removeChild(deleteItem);
	var deleteButton = document.getElementById('delete');
	deleteButton.remove();
}

// Calling Required Functions.
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Event Listeners.
reset.addEventListener('click', resetListElement);

buttonOne.addEventListener('click', addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress);

