import React from 'react'

export default function Counter () {
  return (
    <div className={wrapper}>
      <button 
        className={button}
        type="submit">
          Count: 0
        </button>
    </div>
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

const wrapper = `
  flex
  justify-end
`