export interface ButtonProps {
  count: number,
  incrementor: () => void
}

export interface FormProps {
  // messageHandler: Function,
  setFormState: Function
  formState: string
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}
export interface MessageProps {
  message: string,
}