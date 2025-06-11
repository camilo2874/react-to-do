import React from 'react';
import { render, screen } from '@testing-library/react';
import { ContarTareas } from './contar';
import '@testing-library/jest-dom';

describe('ContarTareas', () => {
  test('muestra el número de tareas completas y el total', () => {
    render(<ContarTareas completas={3} total={5} />);
    expect(screen.getByText(/Has Completado 3 De 5/i)).toBeInTheDocument();
  });

  test('muestra correctamente cuando no hay tareas completas', () => {
    render(<ContarTareas completas={0} total={5} />);
    expect(screen.getByText(/Has Completado 0 De 5/i)).toBeInTheDocument();
  });

  test('muestra correctamente cuando todas las tareas están completas', () => {
    render(<ContarTareas completas={5} total={5} />);
    expect(screen.getByText(/Has Completado 5 De 5/i)).toBeInTheDocument();
  });
});
