import { useState } from 'react'
import { Button } from '../components/index';


export default function Counter () {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevState => prevState + 1)
  }
  return (
    <div className={wrapper}>
      <Button count={count} incrementor={handleIncrement} />
    </div>
  )
}

const wrapper = `
  flex
  justify-end
`
