import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import Button from './Button';

const counterHandler = jest.fn()
afterEach(() => counterHandler.mockReset())

it('should render a "button" with a count: 0', () => {
  render(<Button count={0} incrementor={counterHandler} />)
  screen.getByText(/count: 0/i)
})

it('should render a "button" and call the handler when clicked', () => {
  render(<Button count={0} incrementor={counterHandler} />)
  screen.getByText(/count: 0/i)
  user.click(screen.getByTestId(/counterbutton/i))
  expect(counterHandler).toBeCalledTimes(0)
})