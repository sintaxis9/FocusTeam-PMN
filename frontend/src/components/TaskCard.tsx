import { Link } from 'react-router-dom';
import type { Task } from '../mocks/mockTasks';

const TaskCard = ({ task }: { task: Task }) => {
  const statusColors = {
    'pendiente': '#ffd700',
    'en-progreso': '#87ceeb',
    'completado': '#90ee90'
  };

  return (
    <div style={{ 
      padding: '1rem',
      border: '1px solid #ddd',
      borderRadius: '8px',
      borderLeft: `5px solid ${statusColors[task.status]}`
    }}>
      <h3>{task.title}</h3>
      <p>Asignado a: {task.assignee}</p>
      <p>Fecha límite: {task.dueDate}</p>
      <Link to={`/tasks/${task.id}`}>Ver detalles</Link>
    </div>
  );
};

export default TaskCard;