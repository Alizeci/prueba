import logo from './logo.svg';
import './App.css';
import { TaskItem } from './TaskItem'; //desempaqueta del archivo el componente
import { useState } from 'react';

function App() {
	const [ tasks, setTasks ] = useState([
		{ isCompleted: true, taskName: 'Learn ARSW' },
		{ isCompleted: false, taskName: 'learn SPTI' },
		{ isCompleted: true, taskName: 'learning, here we go!' }
	]);

	const handleTaskChange = (i) => () => {
		console.log('changed! '+i);
    const array = [...tasks];
    array[i].isCompleted=!array[i].isCompleted;
    setTasks(array);
	};
	return (
		<main>
			<form>
				<input type="text" placeholder="task name" />
				<button>Create Task</button>
			</form>
			<ul>
				{tasks.map((task, i) => {
					return (
						<TaskItem
							isChecked={task.isCompleted}
							taskName={task.taskName}
							onTaskChange={handleTaskChange(i)}
						/>
					);
				})}
			</ul>
		</main>
	);
}

export default App;
