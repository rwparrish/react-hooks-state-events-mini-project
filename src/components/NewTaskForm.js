import React from "react";
import { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const [newTask, setNewTask] = useState({
    text: "",
    category: ""
  })

  const categoryOptions = categories.map((cat) => {
    if (cat !== "All") {
      return <option>{cat}</option>
    }
  })

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setNewTask({
      ...newTask,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categoryOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
