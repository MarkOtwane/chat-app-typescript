// (typeof, in, type guards)
// Handle API responses that could be a Task or an error
interface TaskA {
    title: string;
}

interface ErrorHandling{
    error:string;
}

function processResponse(data: TaskA | ErrorHandling){
    if("error" in data){
        console.error(data.error);
        
    }
    else{
        console.log(data.title);
        
    }
}

// definition
const myTask: TaskA = {title:"Do laundry"}
processResponse(myTask)

// // EXERCISE
// Write a function that accepts string | Task and logs the task’s title or the string.
// Use a type guard to check if the input is a Task.
interface ProductD{
    productName: string;
    productId: number;
    productPrice: string
}
 interface UserD{
    userId: number;
    userEmail: string
 }

 function processProducts(data: ProductD | UserD){
    if('productId' in data){
        console.log(data.productId);
              
    }
    else{
        console.log(data.userEmail);
        
    }
 }

 const myProduct : ProductD[] = [
    {productId: 24, productName: "boots", productPrice: "$45"},
    {productId: 22, productName: "boxers", productPrice: "$45"},
    {productId: 21, productName: "guns", productPrice: "$45"},
    {productId: 26, productName: "boxers", productPrice: "$45"},
    {productId: 24, productName: "laptops", productPrice: "$45"},
    {productId: 23, productName: "boxers", productPrice: "$45"},
    {productId: 24, productName: "keyboard", productPrice: "$45"}
 ]

 const productAvailable = myProduct.filter(products=>products.productId=== 24) 

 console.log(productAvailable);
 
 