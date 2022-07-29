import { IButtonProps } from "../utils/types";

const Button = ({onClick, children}: IButtonProps) => {
  return <button
    type={'submit'}
    onClick={onClick}
  >
    {children}
  </button>
};

export default Button;