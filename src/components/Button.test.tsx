import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import Button from './Button';

const countHandler = jest.fn()

it('should render a "button" with a count: 0', () => {
  render(<Button count={0} incrementor={countHandler} />)
  screen.getByText(/count: 0/i)
})
