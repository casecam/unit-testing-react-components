import React from 'react'

export default function Header() {
  return (
    <div className={header}>
     | Link 1 | Link 2 | Link 3 | Link 4 |
    </div>
  )
}

const header = `
  flex
  flex-shrink-0
  shadow
  w-full
  justify-center
  font-semibold
  text-xl
  tracking-tight
  py-2
  px-4
  p-6
  mb-6
  border
  rounded
`