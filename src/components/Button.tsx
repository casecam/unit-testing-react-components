interface ButtonProps {
  count: number,
  incrementor: () => void
}
export default function Button ({ count, incrementor}: ButtonProps) {

  return (
    <div className={wrapper}>
      <div 
        className={button}
        onClick={incrementor}
      >
          Count: {count}
      </div>
    </div>
  )
}

const button = `
  bg-orange-500
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