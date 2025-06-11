import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './button';
import '@testing-library/jest-dom';

describe('Button', () => {
  test('renderiza el texto correctamente', () => {
    render(<Button text="Haz clic" onClick={() => {}} />);
    expect(screen.getByText('Haz clic')).toBeInTheDocument();
  });

  test('llama a la función onClick al hacer clic', () => {
    const handleClick = jest.fn();
    render(<Button text="Presionar" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Presionar'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('el botón tiene la clase CreateTodoButton', () => {
    render(<Button text="Clase" onClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveClass('CreateTodoButton');
  });

  test('el botón acepta el atributo disabled', () => {
    render(<Button text="Deshabilitado" onClick={() => {}} disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
