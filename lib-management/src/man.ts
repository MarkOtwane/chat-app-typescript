interface Details{
    name:string,
    email:string,
    phone: string

}

  //DOM selection
 const nameInput = document.getElementById('name') as HTMLInputElement;
 const emailInput = document.getElementById('email')as HTMLInputElement;
 const phoneInput = document.getElementById('phone')as HTMLInputElement;
 const addBtn = document.getElementById('add')as HTMLButtonElement;
//  const displayData = document.getElementById('dataDisplay')as HTMLDivElement;



 let editIndex: number | null = null; //helps us to track whether we are editing or adding a new value
 let details : Details[] = JSON.parse(localStorage.getItem('details')|| '[]'); //run this to clear localStorage which had a corrupt file

 // access local storage

  //get new values 
 const addDetails = ()=>{
     const newDetails = {
         name:nameInput.value,
         email: emailInput.value,
         phone: phoneInput.value
     }
     //check for empty insertions

     if(!newDetails.email || !newDetails.name || !newDetails.phone){
        alert('Please fill all  the field');
        return
     }

     if(editIndex === null){
        if(details.some(item=> item.email=== newDetails.email || item.phone === newDetails.phone)){
            alert('No duplicated allowed for email or phone.');
            return;
        }

    // push to array of data
     details.push(newDetails);
     }else{
        //for updating nw entry
        details[editIndex] = newDetails;
        editIndex = null;
        addBtn.textContent = 'Add'
     }
     //store data to the local storage
     localStorage.setItem('details', JSON.stringify(details));
     displayDataDom();
     clearForm()
 }

 //function to display data

 const displayDataDom = ()=>{
    const  tableBody = document.querySelector('tbody')!;
    tableBody.innerHTML = ''

    details.forEach((item, index)=>{
        const tableRow =  document.createElement('tr');
        tableRow.innerHTML = `
         <td>${index + 1}</td>
        <td class="dataI">${item.name}</td>
        <td class="dataI">${item.email}</td>
        <td class="dataI">${item.phone}</td>
        <td class="dataI"><button class="editBtn">Edit</button></td>
        <td class="dataI"><button class="deleteBtn" data-index="${index}">Delete</button></td>
        `


        const deleteButton = tableRow.querySelector('.deleteBtn') as HTMLButtonElement;
        deleteButton.addEventListener('click', () => {deleteData(index)});

        tableBody.appendChild(tableRow);

        const editButton = tableRow.querySelector('.editBtn') as HTMLButtonElement; // accessing all data
        editButton.addEventListener('click', () => {
            nameInput.value = item.name;
            emailInput.value = item.email;
            phoneInput.value = item.phone;
            editIndex = index;
            addBtn.textContent = 'Update';
        });


    });
    
 }

 // delete function
 const deleteData = (index:number)=>{
    details.splice(index, 1);
    localStorage.setItem('details', JSON.stringify(details)); // update storage
    displayDataDom(); 
 }

 //clear form function
 const clearForm = () => {
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';
};





// button add Event
 addBtn.addEventListener('click', addDetails);
displayDataDom();