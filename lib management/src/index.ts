class Book {
    title: string;
    isAvailable: boolean;

    // constructor
    constructor(title: string, isAvailable: boolean){
        this.title =title;
        this.isAvailable = isAvailable
    }

    borrow(): string{
        if(this.isAvailable){
            this.isAvailable = true;
            return `${this.title} borrowed successfully`
        }
        return `${this.title} is not available`
    }
}

const book: Book = new Book("Mark", true)
console.log(book.borrow());


