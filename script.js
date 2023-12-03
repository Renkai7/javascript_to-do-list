let todoList = [];

const userMenuChoice = () => {
	const userInput = prompt("Choose to add task (1), remove task (2), exit (3)");

	return userInput;
};

const addTaskToList = (task) => {
	todoList.push(task);
	console.log(todoList);
};

const addTaskMenu = () => {
	const userInput = prompt("What task would you like to add?");
	return userInput;
};

const deleteTaskMenu = () => {
	const userInput = prompt("What task would you like to remove?");
	return userInput;
};

const deleteTaskFromList = (taskToRemove) => {
	const updatedArray = [];

	for (let i = 0; i < todoList.length; i++) {
		if (taskToRemove !== todoList[i]) {
			updatedArray.push(todoList[i]);
		}
	}

	return updatedArray;
};

const main = () => {
	let userMenuInput = userMenuChoice();
	let task = "";
	let runningToDoApp = true;
	while (runningToDoApp) {
		if (userMenuInput === "1") {
			task = addTaskMenu();
			addTaskToList(task);
			userMenuInput = userMenuChoice();
		} else if (userMenuInput === "2") {
			task = deleteTaskMenu();
			todoList = deleteTaskFromList(task);
			console.log(todoList);
			userMenuInput = userMenuChoice();
		} else if (userMenuInput === "3") {
			runningToDoApp = false;
		} else {
			console.log("Invalid option");
			userMenuInput = userMenuChoice();
		}
	}
};

main();
