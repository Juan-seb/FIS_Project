import { useState, createContext } from 'react'

const FilterContext = createContext()

const filtersArray = [
  /* {
    name:'keyword',
    description: 'Palabra clave',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  }, */
  {
    name:'alternative',
    description: 'Nombre alternativo del recurso',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'creator',
    description: 'Creador del recurso',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'contributor',
    description: 'Colaboradores',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'issued',
    description: 'Fecha de creación',
    inOptionFilter:true,
    inForm: false,
    type: 'date',
  },
  {
    name:'date',
    description: 'Fecha de subida',
    inOptionFilter:true,
    inForm: false,
    type: 'date',
  },
  {
    name:'abstract',
    description: 'Descripción del recurso',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'issn',
    description: 'Identificador del recurso',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'publisher',
    description: 'Editorial que publico el recurso',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
  {
    name:'language',
    description: 'Idioma original del recurso',
    inOptionFilter:true,
    inForm: false,
    type: 'text',
  },
]

const sectionArray = [
  {
    name:'Titles',
    path: 'titles'
  },  
  {
    name:'Creator',
    path: 'creator'
  },
  {
    name:'Issue Date',
    path: 'date'
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