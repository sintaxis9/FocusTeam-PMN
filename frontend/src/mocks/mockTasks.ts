export interface Task {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: 'pendiente' | 'en-progreso' | 'completado';
  dueDate: string;
}

export const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Diseñar interfaz de usuario',
    description: 'Crear wireframes en Figma',
    assignee: 'Ana Torres',
    status: 'completado',
    dueDate: '2024-03-25'
  },
  {
    id: '2',
    title: 'Configurar base de datos',
    description: 'Crear esquema inicial en PostgreSQL',
    assignee: 'Carlos Méndez',
    status: 'en-progreso',
    dueDate: '2024-04-01'
  }
];