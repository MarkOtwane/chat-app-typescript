// Create a Book class with private isbn and protected status.
// Create a DigitalBook subclass accessing status.
// Try accessing isbn outside the class and observe the error. |
type Status = "low" | "medium" | "high";

class Book{
    private isbn: string;
    protected status : Status;
    constructor(public name: string, isbn: string, status: Status){
        this.isbn = isbn;
        this.status = status;
    }

}

class DigitalBook extends Book{
    borrowBooks(): string{
        return `${this.status}`
    } 
}

const book = new Book("Power", "1234", "medium");
const digitalBook = new DigitalBook("Po", "qwer", "low")
console.log(digitalBook.borrowBooks());
