import { useEffect, useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/tasks';
import AddTask from './components/addTask';

const App = () => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTasks(tasksFromServer);
        };
        getTasks();
    }, []);

    // fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks');
        const data = await res.json();

        console.log(data);
        return data;
    };

    // fetch task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`);
        const data = await res.json();

        return data;
    };

    // delete task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
        });
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // onAdd task
    const onAddTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const data = await res.json();

        setTasks([...tasks, data]);
    };

    // toggle reminder
    const onToggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
        });
        const data = await res.json();

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task
            )
        );
    };

    return (
        <div className='container'>
            <Header
                onShow={() => setShowAddTask(!showAddTask)}
                changeBtn={showAddTask}
            />
            {showAddTask && <AddTask onAddTask={onAddTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={onToggleReminder}
                />
            ) : (
                'No task to show'
            )}
        </div>
    );
};

export default App;
