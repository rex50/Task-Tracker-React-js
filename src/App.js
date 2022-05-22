import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import { useState, useEffect } from 'react'

function App() {

  const baseUrl = "http://localhost:5000/"

  const [showNewTaskForm, setShowNewTaskForm] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks()
      setTasks(data)
    }
    getTasks()
  }, [])

  // Fetch a single task
  const fetchTask = async (id) => {
    const urlGetTasks = `${baseUrl}tasks/${id}`
    const request = await fetch(urlGetTasks)
    const data = await request.json()
    return data
  }

  // Fetch tasks
  const fetchTasks = async () => {
    const urlGetTasks = `${baseUrl}tasks`
    const request = await fetch(urlGetTasks)
    const data = await request.json()
    return data
  }

  // Add new task
  const addNewTask = async (task) => {
    const urlAddTask = `${baseUrl}tasks`
    const request = await fetch(urlAddTask, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task)
    })

    const data = await request.json()
    setTasks([...tasks, data])
    setShowNewTaskForm(false)
  }

  // Delete task
  const deleteTask = async (id) => {
    const urlDeleteTask = `${baseUrl}tasks/${id}`
    await fetch(urlDeleteTask, { method: 'DELETE' })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const task = await fetchTask(id)
    const updTask = {... task, reminder: !task.reminder}

    const urlUpdateTask = `${baseUrl}tasks/${id}`
    const request = await fetch(urlUpdateTask, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    })

    const data = await request.json()
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: data.reminder} : task))
  }

  return (
    <div className="container">
      <Header showForm={showNewTaskForm} onToggle={() => setShowNewTaskForm(!showNewTaskForm)}/>
      
      {showNewTaskForm && <AddTask onSave={addNewTask}/>}
      
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      ): (
        'No task to show'
      )}

    </div>
  );
}

export default App;
