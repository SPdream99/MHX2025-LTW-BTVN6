"use client";

import { useState } from "react";
import { Task } from "../page";
import { CiEdit, CiSquareRemove } from "react-icons/ci";
import { MdEditOff } from "react-icons/md";

const TodoItem = ({task, ToggleTask, EditTask, RemoveTask} : {task: Task, ToggleTask: (id: number) => void, EditTask: (id: number, title: string) => void, RemoveTask: (id: number) => void}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li className="w-full flex justify-between items-center p-2 border-b">
      {!isEdit && (
        <span onDoubleClick={() => setIsEdit(true)}>
          {task.title}
        </span>
      )}
      
      {isEdit && (
        <input
          type="text"
          defaultValue={task.title}
          onChange={(e) => EditTask(task.id, e.target.value)}
          onBlur={() => setIsEdit(false)}
          autoFocus
          className="rounded px-2 py-1 flex-grow"
        />
      )}

      <div className="flex items-center ml-4">
        <button 
          type="button" 
          onClick={() => setIsEdit(!isEdit)}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center"
        >
          {isEdit ? <MdEditOff /> : <CiEdit />}
        </button>

        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => ToggleTask(task.id)}
          className="w-5 h-5 ml-2"
        />

	<button 
          type="button" 
          onClick={() => RemoveTask(task.id)}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center ml-2"
        >
          <CiSquareRemove/>
        </button>
      </div>
    </li>
  )
}

export default TodoItem;