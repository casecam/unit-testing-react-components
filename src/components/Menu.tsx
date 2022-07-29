
export default function Menu() {
  return (
    <div className={menu}>
        <label htmlFor="dogs">Favorite Dog</label>
        <select
          className={dropdown}
          name="dogs"
          id="dogs"
        >
          <option value={"Black Lab"}>Black Lab</option>
          <option value={"Chocolate Lab"}>Chocolate Lab</option>
          <option value={"Yellow Lab"}>Yellow Lab</option>
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