import React from 'react';
import Task from './task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
	return (
		<React.Fragment>
			{tasks.map((task) => (
				<Task
					key={task.id}
					task={task}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</React.Fragment>
	);
};

export default Tasks;
