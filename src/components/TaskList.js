import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDeleteTask}) {

  const tasksToDisplay = tasks.map(task => 
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      handleDeleteTask={handleDeleteTask}
    />)

  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
