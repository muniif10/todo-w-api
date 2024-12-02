export interface Task {
    id: number;
    title: string;
    completed: boolean;
}


// Instantiate a in-memory array of type Task.
let tasks: Task[] = [];
let idCounter = 1;

// Returns the array of task
// this is a function assigned to a variable
// varname = (argument) : return type => what to return
export const getTasks = (): Task[] => tasks;
// return the Task object that satisfy predicate // in this case task.id equal to id given in argument
export const getTaskById = (id: number): Task | undefined => tasks.find(task => task.id === id);

export const clearTasks = (): Task[] => {
    tasks = [];
    return tasks;
}

export const createTask = (title: string | undefined): Task => {
    let newTask: Task;
    if (title !== undefined) {
        newTask = { id: idCounter++, title: title, completed: false };
    }
    else {
        newTask = { id: idCounter++, title: "empty", completed: false };

    }
    tasks.push(newTask);
    return newTask;
};

export const updateTaskStatus = (id: number, title: string | undefined, completed: boolean): Task | undefined => {
    const task = getTaskById(id);
    if (task) {
        if (title) {
            task.title = title;
        }
        task.completed = completed;
        return task;
    }
    else {
        return undefined;
    }
}



export const deleteTask = (id: number): boolean => {
    const taskIndex = tasks.findIndex(task => task.id === id);
    if (taskIndex > -1) {
        tasks.splice(taskIndex, 1);
        return true;
    }
    else {
        return false;
    }
}