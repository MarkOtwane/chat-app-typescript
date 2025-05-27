// Shorthand Property Initialization 
class Book{
    constructor(public title:string, public author: string){}
    getDetails(): string{
        return `${this.title} by ${this.author}`
    }
}

const book: Book = new Book("1998", "King David")
console.log(book.getDetails());


// shorthand  in constructor, where parameters with access modifier of public automatically become class propertiess reducing the nedd of the this keey word 