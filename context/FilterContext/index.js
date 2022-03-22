import { useState, createContext } from 'react'

const FilterContext = createContext()

const filtersArray = {
  keyword: {
    title: "Palabra clave",
    display: true,
    value: null
  },
  autor: {
    title: "Autor",
    display: false,
    value: null
  }
}

const FilterProvider = ({ children }) => {

  const [filters, setFilters] = useState(filtersArray)

  const data = { filters, setFilters }
  return (
    <FilterContext.Provider value={data}>
      {children}
    </FilterContext.Provider>
  )

}

export { FilterProvider }
export default FilterContext