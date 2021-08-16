import React from 'react';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    render(<App />);

    const colorDisplay = screen.getByTestId('color-display');
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FF0000' });

  });

  it('Changes Color', () => {
    render(<App />);
    const colorInput = screen.getByTestId('color-input');
    const colorDisplay = screen.getByTestId('color-display');

    fireEvent.change(colorInput, { target: { value: '#000000' } });

    expect(colorDisplay).toHaveStyle({ backgroundColor: '#000000' });
  });

  it('Undo', () => {
    render(<App />);
    const colorInput = screen.getByTestId('color-input');
    const colorDisplay = screen.getByTestId('color-display');
    const undo = screen.getByRole('button', { name: 'undo' });

    fireEvent.change(colorInput, { target: { value: '#000000' } });
    fireEvent.change(colorInput, { target: { value: '#FFFFFF' } });
    fireEvent.change(colorInput, { target: { value: '#FFFF00' } });

    fireEvent.click(undo);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FFFFFF' });

    fireEvent.click(undo);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#000000' });
  });

  it('Redo', () => {
    render(<App />);
    const colorInput = screen.getByTestId('color-input');
    const colorDisplay = screen.getByTestId('color-display');
    const undo = screen.getByRole('button', { name: 'undo' });
    const redo = screen.getByRole('button', { name: 'redo' });

    fireEvent.change(colorInput, { target: { value: '#000000' } });
    fireEvent.change(colorInput, { target: { value: '#FFFFFF' } });
    fireEvent.change(colorInput, { target: { value: '#FFFF00' } });

    fireEvent.click(undo);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FFFFFF' });

    fireEvent.click(redo);
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FFF00' });
  });
});
