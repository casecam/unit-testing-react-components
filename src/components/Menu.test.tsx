import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import Menu from './Menu';

it('should render the dropdown menu', () => {
  render(<Menu />)
  // screen.getByText(/favorite dog/i)
  screen.getByRole('combobox', {
    name: /favorite dog/i
  })
})