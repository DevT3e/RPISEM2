import { TaskManager } from "./task_manager.js";
const tasks = new TaskManager();
tasks.LoadTask();
tasks.AddTask("task5",789,"programmer","junior developer");
tasks.deleteTask("task4");
tasks.PrintTask();
