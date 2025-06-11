import { render, screen } from '@testing-library/react';

beforeAll(() => {
  const root = document.createElement('div');
  root.setAttribute('id', 'root');
  document.body.appendChild(root);
});

test('renderiza el input para crear tarea', () => {
  const App = require('./App').default;
  render(<App />);
  expect(screen.getByPlaceholderText('Digite su tarea')).toBeInTheDocument();
});

test('renderiza el botón Crear Tarea', () => {
  const App = require('./App').default;
  render(<App />);
  expect(screen.getByText('Crear Tarea')).toBeInTheDocument();
});

test('renderiza el contador de tareas', () => {
  const App = require('./App').default;
  const { container } = render(<App />);
  // Buscar el h3 con clase ContarTareas que contiene el texto "Has Completado"
  const contador = container.querySelector('h3.ContarTareas');
  expect(contador).toBeInTheDocument();
  expect(contador.textContent).toMatch(/Has Completado/i);
});
