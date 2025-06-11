import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonClick } from './button2';
import '@testing-library/jest-dom';

describe('ButtonClick', () => {
  test('renderiza el texto inicial correctamente', () => {
    render(<ButtonClick />);
    expect(screen.getByText(/Llevas 0 Clicks/i)).toBeInTheDocument();
  });

  test('incrementa el contador al hacer clic', () => {
    render(<ButtonClick />);
    const boton = screen.getByRole('button', { name: /Dar Click/i });
    const titulo = screen.getByRole('heading', { level: 1 });
    fireEvent.click(boton);
    expect(titulo.textContent).toMatch(/1/);
    fireEvent.click(boton);
    expect(titulo.textContent).toMatch(/2/);
  });
});
