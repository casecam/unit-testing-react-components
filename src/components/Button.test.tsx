import { render, screen } from '@testing-library/react'
import Button from './Button';
import { ButtonProps } from '../utils/types'


it('should render a "button" with a count: 0', () => {
  render(<Button count={0} incrementor={jest.fn()} />)
  screen.getByText(/count: 1/i)
})