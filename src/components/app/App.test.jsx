import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { initialState, reducer } from '../../state/reducer';
import { ReduxProvider } from '../../state/ReduxProvider';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    render(<ReduxProvider reducer={reducer} initialState={initialState}><App /></ReduxProvider>);

    const colorDisplay = screen.getByTestId('color-display');
    expect(colorDisplay).toHaveStyle({ backgroundColor: '#FFFF00' });

  });

  it('Changes Color', () => {
    render(<ReduxProvider reducer={reducer} initialState={initialState}><App /></ReduxProvider>);
    const colorInput = screen.getByTestId('color-input');
    const colorDisplay = screen.getByTestId('color-display');

    fireEvent.change(colorInput, { target: { value: '#000000' } });

    expect(colorDisplay).toHaveStyle({ backgroundColor: '#000000' });
  });

  it('Undo', () => {
    render(<ReduxProvider reducer={reducer} initialState={initialState}><App /></ReduxProvider>);
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
    render(<ReduxProvider reducer={reducer} initialState={initialState}><App /></ReduxProvider>);
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
