interface Users{
    firstName : string,
    lastName: string,
    email: string,
    task: string,
    age: number,
    time: Date

}
// dom elements 
const form = document.getElementById('form')!
const display = document.getElementById('display')!

// create an array 
let items: string[] | number[] | boolean = []

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const firstName = (document.getElementById('userInput') as HTMLInputElement).value.trim();
    const lastName = (document.getElementById('userInput2') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const task =  (document.getElementById('task') as HTMLInputElement).value.trim();
    const age =  (document.getElementById('age') as HTMLInputElement).value.trim();
    const  time = (document.getElementById('time') as HTMLInputElement).value.trim();

    const users: Users[] = [{
        users.firstName = firstName,
        users.lastName =  lastName,
        users.email = email,
        users.task = task,
        users.age = age,
        users.time = time

    }];

    form.reset()
});
