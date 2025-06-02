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
 const displayData = document.getElementById('dataDisplay')as HTMLDivElement;

 let details : Details[] = JSON.parse(localStorage.getItem('details')|| '[]')
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
        alert('Please fill the field');
        return
     }

     //check for email and phone deplicate using some() method check if sum items in the array
     if (details.some(item =>item.email === newDetails.email && item.phone === newDetails.phone)){
        alert('No duplicates for email and phone')
        return
    }

    // push to array of data
     details.push(newDetails);
     //store data to the local storage
     localStorage.setItem('details', JSON.stringify(details));
     displayDataDom();
 }

 //function to display data

 const displayDataDom = ()=>{
     displayData.innerHTML = ''
      //loop through the array 
     details.forEach((detail)=>{
         const li = document.createElement('li');
         li.textContent = `${detail.name} ${detail.email} ${detail.phone}`

         displayData.appendChild(li)

     })
 }


// button add Event
 addBtn.addEventListener('click', addDetails);
// window.onload = 
displayDataDom();

