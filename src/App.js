import { useState } from 'react';
import './index.css';
import Header from './components/Header';
import Tasks from './components/tasks';

const App = () => {
	const [tasks, setState] = useState([
		{
			id: 1,
			text: 'playing video game',
			day: 'Dec 23rd at 10:10',
			remider: false,
		},
		{
			id: 2,
			text: 'shopping food',
			day: 'Dec 23rd at 15:10',
			remider: true,
		},
		{
			id: 3,
			text: 'workout at home',
			day: 'Dec 24rd at 12:40',
			remider: true,
		},
	]);
	return (
		<div className='container'>
			<Header title={'task tracker'} />
			<Tasks tasks={tasks} />
		</div>
	);
};

export default App;
