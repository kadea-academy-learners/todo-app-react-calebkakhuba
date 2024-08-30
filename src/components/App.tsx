import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]); // State pour stocker les taches
  const [newTask, setNewTask] = useState(''); // State pour une nouvelle tache

  //condition 
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask(''); // Pour Réinitialiser le champ de saisie
    }
  };

  return (
    <>
      <div>
          <h1>TODO LIST With <span>#React</span></h1>
          <p>
          Pour la gestion ordonée des taches !!! <br /> <span>Nommez,</span> <br /> <span>Ajoutez,</span> <br /><span>Marquez</span> et <br /><span>Supprimez</span> vos taches librement...
          </p>
      </div>
      <div>
        <h2>Ma Liste de Tâches</h2>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Ajouter</button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => {
                  const newTasks = [...tasks];
                  newTasks[index].completed = !newTasks[index].completed;
                  setTasks(newTasks);
                }}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
              <button onClick={() => {
                const newTasks = tasks.filter((_, i) => i !== index);
                setTasks(newTasks);
              }}>Supprimer</button>
            </li>
          ))}
        </ul>
      </div>
    </>
    
  );
}

export default App;