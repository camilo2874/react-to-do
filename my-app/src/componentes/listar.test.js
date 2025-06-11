import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListarTareas } from './listar';
import '@testing-library/jest-dom';

describe('ListarTareas', () => {
  test('renderiza una lista vacía correctamente', () => {
    render(<ListarTareas />);
    const ul = screen.getByRole('list');
    expect(ul).toBeInTheDocument();
    expect(ul.childElementCount).toBe(0);
  });

  test('renderiza los elementos hijos correctamente', () => {
    render(
      <ListarTareas>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
      </ListarTareas>
    );
    expect(screen.getByText('Elemento 1')).toBeInTheDocument();
    expect(screen.getByText('Elemento 2')).toBeInTheDocument();
    const ul = screen.getByRole('list');
    expect(ul.childElementCount).toBe(2);
  });
});
