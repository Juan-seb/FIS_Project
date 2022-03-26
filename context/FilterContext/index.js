import { useState, createContext } from 'react'

const FilterContext = createContext()

const filtersArray = [
  {
    name:'keyword',
    description: 'Palabra clave',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'author',
    description: 'Autor',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'topic',
    description: 'Tema',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'subject',
    description: 'Materia en especifico',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'date',
    description: 'Fecha',
    inOptionFilter:true,
    inForm: false,
    type: 'date',
  },
  {
    name:'colection',
    description: 'Colección',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
]

const sectionArray = [
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
  const [sections, setSections] = useState(sectionArray)

  const data = { filters, setFilters, sections, setSections }
  return (
    <FilterContext.Provider value={data}>
      {children}
    </FilterContext.Provider>
  )

}

export { FilterProvider }
export default FilterContext