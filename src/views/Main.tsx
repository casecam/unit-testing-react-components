import { useState } from "react";
import { Form, Menu, Message } from "../components/index";
import Counter from "./Counter";

export default function Main() {
  const [formState, setFormState] = useState('')
  const [message, setMessage] = useState('')
  const [dogType, setDogType] = useState('Black Lab')

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    setMessage(`We submitted ${formState}, a ${dogType}`);
  };

  return (
    <div className={main}>
      <Menu setDogType={setDogType} />
      <div className={wrapper}>
        <Form
          setFormState={setFormState}
          formState={formState}
          handleSubmit={handleSubmit}
        />
        <Message message={message} />
        <Counter />
      </div>
    </div>
  );
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