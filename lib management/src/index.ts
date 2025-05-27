// Access Modifiers
// public : everywhere accessible 
// private: accessible only within a class 
// protected: accessible within a class and a subclasses 

class User{
    private password: string;
    protected borrowedBooks: string[] = [];

    constructor(public name:string, password:string){
        this.password = password;
    }
    borrowBook(book: string): void{
        this.borrowedBooks.push(book)
    }
}

class Librarian extends User{
    manageBooks(): string[]{
        return this.borrowedBooks//accessible due to protected
    }
}

const user = new User("Joy", "mburu");
// console.log(user.password); error password is accessible only within a class
const librarian = new Librarian("Joe", "Admin");
librarian.borrowBook("Atomic Habits");
console.log(librarian.manageBooks());
