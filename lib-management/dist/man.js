"use strict";
//DOM selection
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addBtn = document.getElementById('add');
const displayData = document.getElementById('dataDisplay');
let details = [];
//get new values 
const addDetails = () => {
    const newDetails = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    };
    //check for empty insertions
    if (!newDetails.email || !newDetails.name || !newDetails.phone) {
        alert('Please fill the field');
        return;
    }
    //check for email and phone deplicate
    // push to array of data
    details.push(newDetails);
    displayDataDom();
};
//function to display data
const displayDataDom = () => {
    displayData.innerHTML = '';
    //loop through the array 
    details.forEach((detail) => {
        const li = document.createElement('li');
        li.textContent = `${detail.name} ${detail.email} ${detail.phone}`;
        displayData.appendChild(li);
    });
};
// button add Event
addBtn.addEventListener('click', addDetails);
