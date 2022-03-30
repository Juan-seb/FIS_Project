import { useState, useEffect, useContext } from 'react'
import useCollapse from 'react-collapsed'
import FilterContext from 'context/FilterContext'

const data = {
  title: () => localStorage.getItem('search')
}

const FilterSearch = ({ handleSubmit }) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const { filters, setFilters } = useContext(FilterContext)
  const [dataForm, setDataForm] = useState(data)


  useEffect(() => {

    filters.forEach(filter => {
      setDataForm({
        ...dataForm,
        [filter.name]: ''
      })
    })    
    /* return () => setFilters(dataFilters) */

  }, [])


  const handleChangeFilters = (e, index) => {
    let copyOfFilters = [...filters]
    copyOfFilters[index]['inForm'] = e.target.checked

    setFilters(copyOfFilters)
  }

  const handleChangeForm = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  return (
    <article>
      <h1 className="text-2xl font-semibold">
        Customized Search
      </h1>
      <hr className="mb-2" />
      <div
        {...getToggleProps()}
        className="w-full h-10 mx-auto p-2 mb-2 bg-red-800 text-white rounded-lg "
      >
        {isExpanded ? "Filtros - Todos los filtros" : "Filtros - Click para mostrar los filtros"}
      </div>
      <div {...getCollapseProps()} >
        <div className="w-full !max-h-min mx-auto p-2 mb-4 rounded-lg bg-gray-300">
          <p>Selecciona el filtro por el cualquier quieres buscar</p>
          <div className="flex flex-wrap">
            {
              filters?.map((filter, index) => (
                filter?.inOptionFilter &&
                <label key={index} className="block w-80 h-6">
                  <input
                    type="checkbox"
                    name={filter}
                    onChange={(e) => handleChangeFilters(e, index)}
                    className="mr-2"
                    checked={filter.inForm}
                  />
                  {filter?.description}
                </label>
              ))
            }
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-start p-2 mb-4 rounded-lg bg-gray-300"
      >
        {
          filters?.map((filter, index) => (

            filter.inForm &&
            <div key={index} className="flex-grow w-full h-min mb-2 md:mr-2 md:w-2/5">
              <p className="inline mb-1">
                {filter.description}:
              </p>
              <input
                type={filter.type}
                onChange={handleChangeForm}
                name={filter.name}
                value={dataForm?.[filter.name]}
                className="block outline-none w-full h-8 pl-2 rounded-md focus:border-gray-500"
              />
            </div>
          ))
        }
        <div className="w-full h-min mb-2">
          <p className="inline">
            Title:
          </p>
          <input
            type="text"
            onChange={handleChangeForm}
            name="title"
            value={dataForm?.generalSearch}
            className="block outline-none w-full h-8 pl-2 my-2 rounded-md focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <button className="w-24 h-8 rounded-md bg-red-700 text-white">Buscar</button>
      </form>
    </article>
  )
}

export default FilterSearch