import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import user from '@testing-library/user-event';

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

test('how a user users the app', () => {
  render(<App />)
  // grab the dropdown menu and select 'Chocolate Lab'
  const comboBox = screen.getByRole('combobox', {
    name: /favorite dog/i
  })
  const dog = screen.getByRole('option', { name: /chocolate lab/i })
  user.selectOptions(comboBox, dog)
  // @ts-ignore
  expect(screen.getByRole('option', { name: /chocolate lab/i}).selected).toBe(true)

  // Type dog's name in the input
  const userInput = screen.getByRole('textbox', { name: /input dog's name here:/i })
  user.type(userInput, 'Arvo')

  // click the Submit button and verify the correct message
  user.click(screen.getByRole('button', { name: /submit/i}))
  screen.getByText(/we submitted arvo, a chocolate lab/i)

  // check the incrementor for 14 clicks
  const button = screen.getByText(/count: 0/i)
  for(let i = 0; i < 14; i++) {
    user.click(button)
  }
  screen.getByText('Count: 14')
  // disable the button on the 15th click
  user.click(button)
  screen.getByText(/disabled/i)
})