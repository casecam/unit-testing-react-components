import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  // get Header
  screen.getByText(/\| link 1 \| link 2 \| link 3 \| link 4 \|/i)
  // get Main --> Menu, Form, Counter
  screen.getByText(/favorite dog/i)
  screen.getByText(/input dog's name here:/i)
  screen.getByRole('textbox', {
    name: /input dog's name here:/i
  })
  screen.getByRole('button', {
    name: /submit/i
  })
  screen.getByText(/count: 0/i)
});
