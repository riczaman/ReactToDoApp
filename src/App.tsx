import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';

function App(){
  const [addNewTask, setNewAddTask] = useState(false);

  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const getTasksFromServer = async () =>{
      const serverTasks = await fetchTasks(); 

      setTasks(serverTasks);
    }

    getTasksFromServer();
  }, [])

  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();

    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json();

    return data; 
  }
  const onDelete = async(id) => {
    const removeTasks = await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter(task => task.id !== id))
  }

  const reminderToggle = async (id) => {
    const getTask = await fetchTask(id);
    const updTask = {...getTask, reminder: !getTask.reminder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT', 
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updTask) 

    })

    const data = await res.json(); 
    setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task ))
  }

  const addTask = async (newTask) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTask)
    })

    const data = await res.json(); 
    setTasks(tasks => [...tasks, data])
  }

  const onAddButtonClick = () => {
    setNewAddTask(!addNewTask);
  }
  return(
    <Router>
      <div className="container">
        <Header title='Task Tracker 2.0' setToggle = {onAddButtonClick} buttonView = {addNewTask}/>
        <Route path='/' exact render = {props =>(
          <>
          {addNewTask && <AddTask addTask={addTask}/>}
          {tasks.length>0 ? <Tasks onDelete = {onDelete} tasks={tasks} reminderToggle ={reminderToggle}/> : 'No Tasks'}
          </>
        )}></Route>
        <Route path='/about' component={About}></Route>
        <Footer/>
      </div>
    </Router>
  )
  
}
export default App;