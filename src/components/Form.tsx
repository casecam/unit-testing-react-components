import React from 'react'

export default function Form () {
  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('clicked the form');
    
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className={label}>Input Dog's Name Here:
        <input className={input} id="text" type="text" placeholder="Dog's Name"/>
      </label>
      <button className={button} type="submit">Submit</button>
    </form>
  )
}

const button = `
  bg-blue-500
  hover:bg-blue-700
  text-white
  font-bold
  py-2
  px-4
  rounded
  focus:outline-none
  focus:shadow-outline
`

const label = `
  block
  text-gray-700
  text-sm
  font-bold
  mb-2
`

const input = `
  shadow
  appearance-none
  border
  rounded
  w-full
  py-2 
  px-3
  text-gray-700
  leading-tight
  focus:outline-none
  focus:shadow-outline
`
