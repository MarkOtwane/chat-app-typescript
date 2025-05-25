"use strict";
function filterByProperty(items, key, value) {
    return items.filter(item => item[key] === value);
}
const tasksA = [
    { title: "write a report", completed: false },
    { title: "call a client", completed: true }
];
const completedTasks = filterByProperty(tasksA, "completed", true);
console.log(completedTasks);
// // EXERCISE
// Write a generic function getFirst<T> that returns the first item of an array.
// Test it with Task[] and string[].
function getFirstNumber(array) {
    return array[0];
}
const numbers = [1, 2, 3, 7, 90, 345, 6, 8, 9];
const firstnumber = getFirstNumber(numbers);
console.log(firstnumber);
