import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#f0f0f0',
      borderBottom: '1px solid #ddd'
    }}>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/">Dashboard</Link>
        <Link to="/tasks">Tareas</Link>
        <Link to="/create-task">Crear Tarea</Link>
      </div>
    </nav>
  );
};

export default Navbar;