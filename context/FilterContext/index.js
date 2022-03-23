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

const sections = [
  {
    name:'Communities & collections',
    path: 'community'
  },
  {
    name:'Issue Date',
    path: 'date'
  },
  {
    name:'Authors',
    path: 'authors'
  },
  {
    name:'Titles',
    path: 'titles'
  },
  {
    name:'Subject',
    path: 'subject'
  },
  
]

const FilterProvider = ({ children }) => {

  const [filters, setFilters] = useState(filtersArray)

  const data = { filters, setFilters, sections }
  return (
    <FilterContext.Provider value={data}>
      {children}
    </FilterContext.Provider>
  )

}

export { FilterProvider }
export default FilterContext