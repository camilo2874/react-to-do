import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tarea } from './tarea';
import '@testing-library/jest-dom';

describe('Tarea', () => {
  const defaultProps = {
    text: 'Mi tarea',
    completada: false,
    onCompletado: jest.fn(),
    onEliminarTarea: jest.fn(),
    onEditar: jest.fn(),
  };

  test('renderiza el texto de la tarea', () => {
    render(<Tarea {...defaultProps} />);
    expect(screen.getByText('Mi tarea')).toBeInTheDocument();
  });

  test('aplica la clase de completada si la tarea está completada', () => {
    render(<Tarea {...defaultProps} completada={true} />);
    expect(screen.getByText('Mi tarea')).toHaveClass('tarea--p--completada');
  });

  test('llama a onCompletado al hacer clic en el texto', () => {
    const onCompletado = jest.fn();
    render(<Tarea {...defaultProps} onCompletado={onCompletado} />);
    fireEvent.click(screen.getByText('Mi tarea'));
    expect(onCompletado).toHaveBeenCalled();
  });

  test('llama a onEliminarTarea al hacer clic en el icono de eliminar', () => {
    const onEliminarTarea = jest.fn();
    render(<Tarea {...defaultProps} onEliminarTarea={onEliminarTarea} />);
    const iconoEliminar = screen.getByText('X');
    fireEvent.click(iconoEliminar);
    expect(onEliminarTarea).toHaveBeenCalled();
  });

  test('llama a onEditar al hacer clic en el icono de editar', () => {
    const onEditar = jest.fn();
    render(<Tarea {...defaultProps} onEditar={onEditar} />);
    const iconoEditar = screen.getByText('⟳');
    fireEvent.click(iconoEditar);
    expect(onEditar).toHaveBeenCalled();
  });
});
