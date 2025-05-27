interface Task{
    title:string;
    completed:boolean;
}

type PartialTask = {
    [K in keyof Task]?: Task[K]
};
 const partial: PartialTask ={
    title: "write a report"
 }