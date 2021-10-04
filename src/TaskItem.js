export const TaskItem = ({isChecked, taskName, onTaskChange}) => {
    const styleOfTheComponent = {
        textDecoration: isChecked ? 'line-through': '',
    }
    //const {isChecked, taskName} = props; //open the box
	return (
		<li>
			<input onChange={onTaskChange} checked={isChecked} type="checkbox" />
			<span style={styleOfTheComponent}>{taskName}</span>
		</li>
	);
};