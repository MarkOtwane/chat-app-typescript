"use strict";
// DOM elements 
const display = document.getElementById('display');
const addButton = document.getElementById('btn');
// Create an array 
let items = []; //JSON.parse(localStorage.getItem('data') || '[]');
// Clear and render existing users on load
display.innerHTML = "";
items.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${element.firstName} ${element.lastName} ${element.email} ${element.task} ${element.age}`;
    display.appendChild(listItem);
});
function addUsers() {
    const firstName = document.getElementById('userInput').value.trim();
    const lastName = document.getElementById('userInput2').value.trim();
    const email = document.getElementById('email').value.trim();
    const task = document.getElementById('task').value.trim();
    const age = Number(document.getElementById('age').value.trim());
    const users = {
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
