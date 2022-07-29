import React from 'react'

export default function Button () {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => { 
    console.log('clicked');
  }
  return (
    <div className={wrapper}>
      <div 
        className={button}
        onClick={handleClick}
      >
          Count: 0
      </div>
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