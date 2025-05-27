// shorthand  in constructor, where parameters with access modifier of public automatically become class propertiess reducing the nedd of the this keey word 
// Create a User class with shorthand properties name and email.
// Add a getProfile method returning a formatted string.

class User{
    constructor(public name:string, public email:string){}

    getProfile(): string{
        return `${this.name} your email is ${this.email}`
    }
}

const user: User  = new User("Mark", "mark@gmail.com")
console.log(user.getProfile());
