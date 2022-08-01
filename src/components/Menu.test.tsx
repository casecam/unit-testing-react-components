import { render, screen } from '@testing-library/react'
import Menu from './Menu';

it('should render the dropdown menu', () => {
  render(<Menu />)
  // screen.getByText(/favorite dog/i)
  screen.getByRole('combobox', {
    name: /favorite dog/i
  })
})

it('should check the default selected option menu', () => {
  render(<Menu />)
  // @ts-ignore
  expect(screen.getByRole('option', { name: /black lab/i }).selected).toBe(true)
})

it('should display the correct number of options', () => {
  render(<Menu />)
  expect(screen.getAllByRole('option').length).toBe(3)
})
