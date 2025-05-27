"use strict";
// Access Modifiers
// public : everywhere accessible 
// private: accessible only within a class 
// protected: accessible within a class and a subclasses 
class User {
    constructor(name, password) {
        this.name = name;
        this.borrowedBooks = [];
        this.password = password;
    }
    borrowBook(book) {
        this.borrowedBooks.push(book);
    }
}
class Librarian extends User {
    manageBooks() {
        return this.borrowedBooks; //accessible due to protected
    }
}
const user = new User("Joy", "mburu");
// console.log(user.password); error password is accessible only within a class
const librarian = new Librarian("Joe", "Admin");
librarian.borrowBook("Atomic Habits");
console.log(librarian.manageBooks());
