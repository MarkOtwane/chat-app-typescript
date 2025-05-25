// A generic function to filter taska by property
interface TaskC{
    title :string;
    completed: boolean
}

function filterByProperty<T, K extends keyof T>(items: T[], key:K, value: T[K]): T[]{
    return items.filter(item=>item[key] === value)
}

const tasksA: TaskC[] = [
    {title: "write a report", completed: false},
    {title:"call a client", completed: true}
];
const completedTasks = filterByProperty(tasksA, "completed", true)
console.log(completedTasks);


// // EXERCISE
// Write a generic function getFirst<T> that returns the first item of an array.
// Test it with Task[] and string[].

function getFirst<T, K extends keyof T>{}