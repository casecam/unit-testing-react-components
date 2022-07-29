import React from 'react'

export default function Form () {
  return (
    <form className={container}>
      <label className={label}>Input Dog's Name Here:
        <input className={input} id="text" type="text" placeholder="Dog's Name"/>
      </label>
    </form>
  )
}

const container = `
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
