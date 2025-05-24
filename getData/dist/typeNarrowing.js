"use strict";
function processResponse(data) {
    if ("error" in data) {
        console.error(data.error);
    }
    else {
        console.log(data.title);
    }
}
// definition
const myTask = { title: "Do laundry" };
processResponse(myTask);
function processProducts(data) {
    if ('productId' in data) {
        console.log(data.productId);
    }
    else {
        console.log(data.userEmail);
    }
}
const myProduct = [
    { productId: 24, productName: "boots", productPrice: "$45" },
    { productId: 22, productName: "boxers", productPrice: "$45" },
    { productId: 21, productName: "guns", productPrice: "$45" },
    { productId: 26, productName: "boxers", productPrice: "$45" },
    { productId: 24, productName: "laptops", productPrice: "$45" },
    { productId: 23, productName: "boxers", productPrice: "$45" },
    { productId: 24, productName: "keyboard", productPrice: "$45" }
];
const productAvailable = myProduct.filter(products => products.productId === 24);
console.log(productAvailable);
