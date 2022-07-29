import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event';
import Form from './Form';

const submitHandler = jest.fn(event => event.preventDefault())
const stateHandler = jest.fn()
afterEach(() => submitHandler.mockReset())

it('should render the form', () => {
  render(<Form handleSubmit={submitHandler} formState="" setFormState={stateHandler} />)
  screen.getByText(/input dog's name here:/i)
  screen.getByRole('textbox', {
    name: /input dog's name here:/i
  })
  screen.getByRole('button', {
    name: /submit/i
  })
})

it('should call the handler when the submit button is clicked', () => {
  render(<Form handleSubmit={submitHandler} formState="" setFormState={stateHandler}/>)
  user.click(screen.getByRole('button', {
    name: /submit/i
  }))
  expect(submitHandler).toBeCalledTimes(1)
})