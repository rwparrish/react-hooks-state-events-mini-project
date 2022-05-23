import React from "react";
import { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategory] = useState("All")

  const handleDeleteTask = (deletedText) => {
    const updatedTasks = tasks.filter((task) => task.text !== deletedText);
    setTasks(updatedTasks)
  }

  const tasksToDisplay = tasks.filter((task) => {
    if (category === "All") {
      return true
    } else {
      return task.category === category
    }
  })

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        selectedCategory={category} 
        handleCategoryFilter={setCategory} 
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
        handleDeleteTask={handleDeleteTask} 
        tasks={tasksToDisplay}
      />
    </div>
  );
}

export default App;
