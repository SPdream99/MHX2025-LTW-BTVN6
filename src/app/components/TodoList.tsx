"use client";

import { Task } from "../page";
import TodoItem from "./TodoItem";

const TodoList = ({tasks, ToggleTask, EditTask, RemoveTask} : {tasks: Task[], ToggleTask: (id: number) => void, EditTask: (id: number, title: string) => void, RemoveTask: (id: number) => void}) => {
  return (
    <ul className="w-full">
        {
            tasks.map((task) => (
                <TodoItem key={task.id} task = {task} ToggleTask={ToggleTask} EditTask = {EditTask} RemoveTask = {RemoveTask}/>
            ))
        }
    </ul>
  )
}

export default TodoList