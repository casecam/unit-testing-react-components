export interface ButtonProps {
  count: number,
  incrementor: () => void
}

export interface FormProps {
  messageHandler: Function,
  message: string
}
export interface MessageProps {
  message: string,
}