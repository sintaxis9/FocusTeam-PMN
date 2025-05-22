import { useState } from 'react';
import { mockTasks } from '../mocks/mockTasks';
import TaskCard from '../components/TaskCard.tsx';

const TaskList = () => {
  const [tasks] = useState(mockTasks);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Buscar tareas..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      />
      
      <div style={{ display: 'grid', gap: '1rem' }}>
        {tasks
          .filter(task => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  );
};

export default TaskList;