import { Request, response, Response } from "express";
import * as taskModel from '../models/taskModel';

export const createTask = (req: Request, res: Response): void => {
    const  title  = req.body.title;
    const task = taskModel.createTask(title);
    res.status(201).json(task);
}

// Get all tasks in array
export const getAllTasks = (_req: Request, res: Response): void => {
    const tasks = taskModel.getTasks();
    res.status(200).json(tasks);
}

// Get one specific id task
export const getTask = (_req: Request, res: Response): void => {
    const task = taskModel.getTaskById(Number(_req.params.id));

    if (task) {
        res.status(200).json(task);
    }
    else {
        res.status(404).json({ message: "No task found with that id" });
    }
}

// Update task
// id, title, completed
export const updateTask = (_req: Request, res: Response): void => {
    const id = Number(_req.body.id);
    const title = _req.body.title;
    const completed = Boolean(_req.body.completed);
    const task = taskModel.updateTaskStatus(id, title, completed);

    // if received id and completed
    // do: pass the completed to object and set response to function output
    if (task) {
        res.json(task);
    }
    else {
        res.status(404).json({ message: "No task found with that id" });
    }

}

export const deleteTask = (_req: Request, res: Response): void => {
    const success = taskModel.deleteTask(Number(_req.params.id));

    if (success) {
        res.status(201).send();
    }
    else {
        res.status(404).json({ message: "No task found with that id" });
    }
}

// Delete task