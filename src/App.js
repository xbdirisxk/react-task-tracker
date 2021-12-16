import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/tasks';
import AddTask from './components/addTask';

const App = () => {
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'playing video game',
			day: 'Dec 23rd at 10:10',
			reminder: false,
		},
		{
			id: 2,
			text: 'shopping food',
			day: 'Dec 23rd at 15:10',
			reminder: true,
		},
		{
			id: 3,
			text: 'workout at home',
			day: 'Dec 24rd at 12:40',
			reminder: true,
		},
	]);

	// delete task
	const deleteTask = (taskId) =>
		setTasks(tasks.filter((task) => task.id !== taskId));

	// toggle reminder
	const onToggleReminder = (taskId) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, reminder: !task.reminder } : task
			)
		);
	};

	return (
		<div className='container'>
			<Header title={'task tracker'} />
			<AddTask />
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
