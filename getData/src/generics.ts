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

function getFirstNumber(array: number []){
    return array[0]
}

const numbers =  [1,2,3,7,90,345,6,8,9]
const firstnumber = getFirstNumber(numbers)
console.log(firstnumber);

// generics return the type of an element whene the element is noy defined like use of any nd unknown types so in this situation generics returns a value if its a number it returns a number and the string and boolean the same espeacially in the use of arrays https://youtu.be/EcCTIExsqmI?si=WaOlJ775SXd1J0X8
// generics used here 
function getNumber<ElementType>(array: ElementType[]){ //single generic type
    return array[0]
}

const number12 = [1,2,3,4,5,6,7]
const firstNumber23 = getNumber(number12)

const strings = ["cwknve","cnevnoevne", "vevrnri"]