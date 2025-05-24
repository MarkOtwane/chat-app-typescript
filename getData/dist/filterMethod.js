"use strict";
const details = [
    { productId: 1, productName: "shoes", productDescription: "black cotton shoes", status: "sold", userId: 1, userName: "Joe", userEmail: "koe@gmail.com" },
    { productId: 32, productName: "shoes", productDescription: "black cotton shoes", status: "pending", userId: 2, userName: "Joe", userEmail: "joe@gmail.com" },
    { productId: 74, productName: "shoes", productDescription: "black cotton shoes", status: "pending", userId: 3, userName: "Joe", userEmail: "moe@gmail.com" },
    { productId: 56, productName: "rifle", productDescription: "black cotton shoes", status: "sold", userId: 4, userName: "Joe", userEmail: "poe@gmail.com" },
    { productId: 1, productName: "comforter", productDescription: "black cotton shoes", status: "pending", userId: 5, userName: "Joe", userEmail: "qoe@gmail.com" },
    { productId: 1, productName: "boots", productDescription: "black cotton shoes", status: "rejected", userId: 6, userName: "Joe", userEmail: "roe@gmail.com" },
];
const products = details.filter(product => product.status === "sold");
console.log(products);
