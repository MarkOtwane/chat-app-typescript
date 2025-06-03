"use strict";
//DOM selection
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addBtn = document.getElementById('add');
//  const displayData = document.getElementById('dataDisplay')as HTMLDivElement;
let details = JSON.parse(localStorage.getItem('details') || '[]');
let editIndex = null; //helps us to track whether we are editing or adding a new value
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
        alert('Please fill all  the field');
        return;
    }
    if (editIndex === null) {
        if (details.some(item => item.email === newDetails.email || item.phone === newDetails.phone)) {
            alert('No duplicated allowed for email or phone.');
            return;
        }
        //check for email and phone deplicate using some() method check if sum items in the array
        //  if (details.some(item =>item.email === newDetails.email || item.phone === newDetails.phone)){
        //     alert('No duplicates for email and phone')
        //     return
        // }
        // push to array of data
        details.push(newDetails);
    }
    else {
        //for updating nw entry
        details[editIndex] = newDetails;
        editIndex = null;
        addBtn.textContent = 'Add';
    }
    //store data to the local storage
    localStorage.setItem('details', JSON.stringify(details));
    displayDataDom();
    clearForm();
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
        const editButton = tableRow.querySelector('.editBtn'); // accessing all data
        editButton.addEventListener('click', () => {
            nameInput.value = item.name;
            emailInput.value = item.email;
            phoneInput.value = item.phone;
            editIndex = index;
            addBtn.textContent = 'Update';
        });
    });
};
// delete function
const deleteData = (index) => {
    details.splice(index, 1);
    localStorage.setItem('details', JSON.stringify(details)); // update storage
    displayDataDom();
};
//clear form function
const clearForm = () => {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
};
// button add Event
addBtn.addEventListener('click', addDetails);
// window.onload = 
displayDataDom();
