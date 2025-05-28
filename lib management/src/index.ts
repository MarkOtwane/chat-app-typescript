class Siblings{
constructor(public name: string, public name2: string){}
 family():string{
  return `${this.name} and ${this.name2} are siblings`
}
}

const users = new Siblings("Mark", "Karen");
console.log(users.family())