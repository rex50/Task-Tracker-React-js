import PropTypes from 'prop-types'
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
    const reversedTasks = [].concat(tasks).reverse()
    return (
        <>
            {reversedTasks.map((task) => (
                <Task key={task.id} 
                    task={task} 
                    onDelete={onDelete} 
                    onToggle={onToggle}/>
            ))}
        </>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}

export default Tasks