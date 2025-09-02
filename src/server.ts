import express from "express";
import mongoose from "mongoose";
import {
    createTask,
    getTaskById,
    getAllTasks,
    updateTask,
    deleteTask
} from "./controllers/taskController";

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb://task-mongo:27017/tasksdb";

mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected OK"))
    .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.post("/tasks", createTask);
app.get("/tasks/:id", getTaskById);
app.get("/tasks", getAllTasks);
app.patch("/tasks/:id", updateTask);
app.delete("/tasks/:id", deleteTask);

// Start server (bind to 0.0.0.0 for container access)
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
});
