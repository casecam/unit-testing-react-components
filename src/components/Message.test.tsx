import { render, screen } from '@testing-library/react'
import Message from './Message';

it('should render the dropdown menu', () => {
  render(<Message message={""}/>)
  // screen.getByText(/favorite dog/i)
  screen.getByLabelText('message box')
})
