import Header from "./components/Header";
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask";
import { useState } from 'react'

function App() {

  const [showNewTaskForm, setShowNewTaskForm] = useState(false)
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Learn React JS (DOM)',
        day: 'May 20th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Learn React Native',
        day: 'May 21th at 12:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Start with OLA app with React Native',
        day: 'May 24th at 10:30am',
        reminder: true
    },
  ])

  // Add new task
  const addNewTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([newTask, ...tasks])
    setShowNewTaskForm(false)
  }

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: !task.reminder} : task))
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
