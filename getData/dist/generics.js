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
