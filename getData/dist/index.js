"use strict";
// function greet(name:string): string{
//     return `Hello, ${name}`
// }
// console.log(greet("mark"));
// how to declared interfaces intersected as an array 
const taskAssigned = [
    { typeTask: "coding", taskId: 123, name: "john", userId: 2345, category: "number" },
    { typeTask: "Washing the church", taskId: "12345", name: "jack", userId: 21345, category: "string" },
    { typeTask: "Twitter clone", taskId: 4532, name: "James", userId: 2345789, category: "number" },
    { typeTask: "hunting", taskId: 6789, name: "Joe", userId: 9878, category: "number" }
];
const tasks = taskAssigned.filter(task => task.category === "string");
console.log(tasks);
// Type Narrowing(typeof, in or type guards)
