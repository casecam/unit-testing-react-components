import { MouseEventHandler } from "react";

export interface IButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>,
  children: JSX.Element
}