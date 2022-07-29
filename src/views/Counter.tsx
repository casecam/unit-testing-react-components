import React from 'react'
import { Button } from '../components/index';

export default function Counter () {
  return (
    <div className={wrapper}>
      <Button />
    </div>
  )
}

const wrapper = `
  flex
  justify-end
`