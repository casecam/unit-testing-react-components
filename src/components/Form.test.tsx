import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import Form from './Form';


it('should render the form', () => {
  render(<Form />)
  screen.getByText(/input dog's name here:/i)
  screen.getByRole('textbox', {
    name: /input dog's name here:/i
  })
  screen.getByRole('button', {
    name: /submit/i
  })
})