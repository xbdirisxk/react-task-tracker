import React from 'react';
import Task from './task';

const Tasks = ({ tasks }) => {
	return (
		<React.Fragment>
			{tasks.map((task) => (
				<Task key={task.id} task={task} />
			))}
		</React.Fragment>
	);
};

export default Tasks;
