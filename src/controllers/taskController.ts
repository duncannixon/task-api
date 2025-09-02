import { Request, Response } from "express";
import { Task, ITask } from "../models/task";

function getErrorMessage(error: unknown): string {
    if (error instanceof Error) return error.message;
    return String(error);
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (error: unknown) {
        res.status(400).json({ error: getErrorMessage(error) });
    }
};

export const getTaskById = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ error: "Task not found" });
        res.json(task);
    } catch (error: unknown) {
        res.status(400).json({ error: getErrorMessage(error) });
    }
};

export const getAllTasks = async (_req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error: unknown) {
        res.status(500).json({ error: getErrorMessage(error) });
    }
};

export const updateTask = async (req: Request, res: Response) => {
    try {
        // Allow the body to update title, description, status, and dueDate
        const { title, description, status, dueDate } = req.body;

        // Create an update object
        const updateFields: Partial<ITask> = {};
        if (title) {
            updateFields.title = title;
        }
        if (description) {
            updateFields.description = description;
        }
        if (status) {
            updateFields.status = status;
        }
        if (dueDate) {
            updateFields.dueDate = dueDate;
        }

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            updateFields,
            { new: true, runValidators: true }
        );

        if (!task) return res.status(404).json({ error: "Task not found" });

        res.json(task);
    } catch (error: unknown) {
        res.status(400).json({ error: getErrorMessage(error) });
    }
};

export const deleteTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) { 
            return res.status(404).json({ error: "Task not found" }); 
        }
        res.json({ message: "Task deleted successfully" });
    } catch (error: unknown) {
        res.status(400).json({ error: getErrorMessage(error) });
    }
};
