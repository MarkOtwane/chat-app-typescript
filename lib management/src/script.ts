// // arrays and array methods 
// let ninja3 : string[] = ['bread', 'milk', 'sugar','tea'];
// // let ninja2 : [] = []

// //push

// ninja3.push('Mark');

// let popped = ninja3.pop()

// // pop(remove element at the end of an array)
// let shifted = ninja3.shift()
// // shift(remove an element at the beginning)

// // loop through  array 
// ninja3.forEach((item)=>{
//     console.log(item)
// })

// //includes, filter, some, find, splice

// // splice takes 2 parameters index of element to be deleted
// //splice(index, 1)
// let arr: number[] = [1,23, 45,9734]

// let splicedElement : number [] = arr.splice(2,0, 11);
// // splice (index, numberOfElementYouwantToRemove,elementYouwantToAddToArray)

// // filter(takes1Argument)
// // check sorting  we want to check
// const unique = ninja3.filter(u =>{
//     return u !== 'sugar'
// })

const ulList = document.getElementById('details') as HTMLUListElement;

let list : string[] = [];
list.push('coding', 'web design', 'video editing', "reading the bible");

list.forEach(item=>{
    const p = document.createElement('p')
    p.innerHTML = item
    ulList.appendChild(p)
})























