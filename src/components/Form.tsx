import React from 'react'

export default function Form () {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2">Input some text here:
        <input className={input} id="text" type="text" placeholder="Input text"/>
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
