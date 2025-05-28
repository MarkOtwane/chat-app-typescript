"use strict";
class Siblings {
    constructor(name, name2) {
        this.name = name;
        this.name2 = name2;
    }
    family() {
        return `${this.name} and ${this.name2} are siblings`;
    }
}
const users = new Siblings("Mark", "Karen");
console.log(users.family());
