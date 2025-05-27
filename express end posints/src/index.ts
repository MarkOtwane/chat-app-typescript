import experss, {Request, Response } from "express";

interface Task{
    id:number;
    title:string;
}

const app = experss();
app.use(experss.json())

const tasks: Task[] = [];

app.get("/tasks", (req:Request, res:Response)=>{
    res.json(tasks)
});

app.listen(3000, ()=> console.log("server running on port 3000"))