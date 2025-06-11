import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BuscarTarea } from './buscar';
import '@testing-library/jest-dom';

describe('BuscarTarea', () => {
  test('renderiza el input con el placeholder correcto', () => {
    render(<BuscarTarea buscarTarea="" setBusacarTarea={() => {}} />);
    expect(screen.getByPlaceholderText('Buscar tarea')).toBeInTheDocument();
  });

  test('muestra el valor del input correctamente', () => {
    render(<BuscarTarea buscarTarea="tarea de prueba" setBusacarTarea={() => {}} />);
    expect(screen.getByDisplayValue('tarea de prueba')).toBeInTheDocument();
  });

  test('llama a setBusacarTarea al cambiar el valor', () => {
    const setBusacarTarea = jest.fn();
    render(<BuscarTarea buscarTarea="" setBusacarTarea={setBusacarTarea} />);
    fireEvent.change(screen.getByPlaceholderText('Buscar tarea'), { target: { value: 'nueva' } });
    expect(setBusacarTarea).toHaveBeenCalledWith('nueva');
  });
});
