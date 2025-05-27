"use strict";
class Book {
    constructor(name, isbn, status) {
        this.name = name;
        this.isbn = isbn;
        this.status = status;
    }
}
class DigitalBook extends Book {
    borrowBooks() {
        return `${this.status}`;
    }
}
const book = new Book("Power", "1234", "medium");
const digitalBook = new DigitalBook("Po", "qwer", "low");
console.log(digitalBook.borrowBooks());
