// function greet(name:string): string{
//     return `Hello, ${name}`
// }
// console.log(greet("mark"));

//basic types :: primitive data types 
type Task = {
    title:string;
    completed:boolean;
};
let task : Task = {
    title: "mark Otwane",
    completed:true
}
console.log(task);

interface User{
    name:string;
    id:number
}

interface Admin extends User{
    role: string
}

const enter : User = {name:"write a report", id:12}
const admin : Admin = {name:"submit proposal", id:23, role:"admin"}

console.log(admin);

