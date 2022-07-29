import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders four links', () => {
  render(<App />);
  screen.getByText(/\| lnk 1 \| link 2 \| link 3 \| link 4 \|/i)
});
