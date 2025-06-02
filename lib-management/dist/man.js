"use strict";
//DOM selection
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addBtn = document.getElementById('add');
//  const displayData = document.getElementById('dataDisplay')as HTMLDivElement;
let details = JSON.parse(localStorage.getItem('details') || '[]');
// access local storage
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
    //check for email and phone deplicate using some() method check if sum items in the array
    if (details.some(item => item.email === newDetails.email || item.phone === newDetails.phone)) {
        alert('No duplicates for email and phone');
        return;
    }
    // push to array of data
    details.push(newDetails);
    //store data to the local storage
    localStorage.setItem('details', JSON.stringify(details));
    displayDataDom();
};
//function to display data
const displayDataDom = () => {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    details.forEach((item, index) => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
         <td>${index + 1}</td>
        <td class="dataI">${item.name}</td>
        <td class="dataI">${item.email}</td>
        <td class="dataI">${item.phone}</td>
        <td class="dataI"><button class="editBtn">Edit</button></td>
        <td class="dataI"><button class="deleteBtn" data-index="${index}">Delete</button></td>
        `;
        const deleteButton = tableRow.querySelector('.deleteBtn');
        deleteButton.addEventListener('click', () => {
            deleteData(index);
        });
        tableBody.appendChild(tableRow);
    });
};
// delete function
const deleteData = (index) => {
    details.splice(index, 1);
    localStorage.setItem('details', JSON.stringify(details)); // update storage
    displayDataDom();
};
// button add Event
addBtn.addEventListener('click', addDetails);
// window.onload = 
displayDataDom();
