interface Users {
    firstName: string,
    lastName: string,
    email: string,
    task: string,
    age: number,
    // time: Date
}

// DOM elements 
const display = document.getElementById('display') as HTMLUListElement;
const addButton = document.getElementById('btn') as HTMLButtonElement;

// Create an array 
let items: Users[] = [] //JSON.parse(localStorage.getItem('data') || '[]');

// Clear and render existing users on load
display.innerHTML = "";
items.forEach((element: Users) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${element.firstName} ${element.lastName} ${element.email} ${element.task} ${element.age}`;
    display.appendChild(listItem);
});

function addUsers() {
    const firstName = (document.getElementById('userInput') as HTMLInputElement).value.trim();
    const lastName = (document.getElementById('userInput2') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const task = (document.getElementById('task') as HTMLInputElement).value.trim();
    const age = Number((document.getElementById('age') as HTMLInputElement).value.trim());

    const users: Users = {
        firstName,
        lastName,
        email,
        task,
        age,
        // time
    };

    items.push(users);
    localStorage.setItem('data', JSON.stringify(items));

    const listItem = document.createElement('li');
    listItem.textContent = `${users.firstName} ${users.lastName} ${users.email} ${users.task} ${users.age}`;
    display.appendChild(listItem);
}

// Add button
addButton.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form from submitting
    addUsers();
});
