import { dropDownOptions } from "../data/data"
import { MenuProps } from "@mui/material"

export default function Menu({ setDogType }: any) {
  const handleChange = (event: any) => {
    console.log('setting dog type');
    
    setDogType(event.target.value);
  }
  return (
    <div className={menu}>
        <label htmlFor="dogs">Favorite Dog</label>
        <select
          className={dropdown}
          name="dogs"
          id="dogs"
          onChange={handleChange}
        >{dropDownOptions.map(option => {
          return <option value={option}>{option}</option>
        })}
        </select>
    </div>
  )
}

const dropdown = `
  block
  appearance-none
  w-full
  bg-white
  border
  border-gray-400
  hover:border-gray-500
  px-4
  py-2
  pr-8
  rounded
  shadow
  leading-tight
  focus:outline-none
  focus:shadow-outline
`

const menu = `
  flex
  flex-col
  w-auto
  mr-6
  const
  block
  text-gray-700
  text-m
  font-bold
  leading-tight
`