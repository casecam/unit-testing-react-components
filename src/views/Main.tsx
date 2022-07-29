import { Form, Menu } from "../components/index";
import Counter from "./Counter";

export default function Main() {
  return (
    <div className={main}>
      <Menu />
      <div className={wrapper}>
        <Form />
        <Counter />
      </div>
    </div>
  )
}

const main = `
  flex
  justify-center
  shadow
  appearance-none
  border
  rounded
  focus:outline-none
  focus:shadow-outline
  bg-white
  shadow-md
  rounded
  px-8
  pt-6
  pb-8
  mb-4"
  w-auto
`
const wrapper = `

`