// function greet(name:string): string{
//     return `Hello, ${name}`
// }
// console.log(greet("mark"));

//basic types :: primitive data types 
        // type Task = {
        //     title:string;
        //     completed:boolean;
        // };
        // let task : Task = {
        //     title: "mark Otwane",
        //     completed:true
        // }
        // console.log(task);
        // console.log('====================================');
        // console.log(Interface);
        // console.log('====================================');
// interface User{
//     name:string;
//     id:number
// }

// interface Admin extends User{
//     role: string
// }

// const enter : User = {name:"write a report", id:12}
// const admin : Admin = {name:"submit proposal", id:23, role:"admin"}

// console.log(admin);

        // --Enum--
        // enum Priority{
        //     Low = "low",
        //     High = "high",
        //     Medium = "medium"

        // }

        // interface Task {
        //     title:string;
        //     priority : Priority
        // }

        // const task : Task = {title: "write a report", priority: Priority.High}
        //  Exercise

        // Create an enum Status with Pending, InProgress, Completed.
        // Add status to the Task interface.
        // Write a function to filter tasks by status.
        // Reflect: How do enums make the API more maintainable?

        enum Status{
            Pending = "pending",
            InProgress = "inProgress",
            completed= "completed"
        }
        interface  Task{
            name:string;
            status: Status,
        }
        //function to filter the task with priority
        const tasks : Task[]=[
            {name:"jone", status:Status.Pending}, //I had a bug in th declaration but i figured it out,
            {name:"jack", status:Status.Pending},
            {name:"james", status:Status.InProgress},
            {name:"john", status:Status.Pending},
            {name:"Leah", status:Status.InProgress},
            {name:"Adin", status:Status.Pending},
            {name:"Doe", status:Status.InProgress},
            {name:"God", status:Status.completed}
        ]

        //function to filter  Method
        const pendingTask = tasks.filter(task=>task.status === Status.Pending)

        const completedTask = tasks.filter(task=>task.status===Status.completed)
        const progressTask = tasks.filter(task=>task.status===Status.InProgress)
               //filter method in ts
               // create a new element then you assgn it to the array.filter
               //const pending = tasks(array).filter(task=> task.status === Status.pending)
            
        console.log(completedTask);
        console.log('====================================');
        console.log('====================================');
        console.log(pendingTask);
        console.log('====================================');
        console.log('====================================');
        console.log(progressTask);
        console.log('====================================');
        

