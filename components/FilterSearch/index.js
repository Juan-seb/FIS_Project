import { useState, useEffect, useContext } from 'react'
import useCollapse from 'react-collapsed'
import FilterContext from 'context/FilterContext'

const FilterSearch = ({ handleSubmit }) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()
  const { filters, setFilters } = useContext(FilterContext)
  const [dataForm, setDataForm] = useState(null)
  const [wordToSearch, setWordToSearch] = useState('')

  useEffect(() => {

    let word = localStorage.getItem('search')
    word && setWordToSearch(word)

    let data = {}

    filters.map(filter => {
      data = {
        ...data,
        [filter.name]: ''
      }
    })

    setDataForm(data)

  }, [])

  const handleChangeFilters = (e, index) => {
    let copyOfFilters = filters
    copyOfFilters[index]['inForm'] = e.target.checked

    setFilters([...copyOfFilters])
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
      <div {...getCollapseProps()}>
        <div className="w-full !max-h-min mx-auto p-2 mb-4 rounded-lg bg-gray-300">
          <p>Selecciona el filtro por el cualquier quieres buscar</p>
          {
            filters?.map((filter, index) => (
              filter?.inOptionFilter &&
              <label key={index} className="block w-full h-6">
                <input
                  type="checkbox"
                  name={filter}
                  onChange={(e) => handleChangeFilters(e, index)}
                  className="mr-2"
                />
                {filter?.description}
              </label>
            ))
          }
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap justify-start"
      >
        {
          filters?.map((filter, index) => (

            filter.inForm &&
            <div key={index} className="w-[450px] sm:w-[500px]">
              <p className="inline">{filter.description}:</p>
              <input
                type={filter.type}
                onChange={handleChangeForm}
                name={filter.name}
                value={dataForm[filter.name]}
                className="inline"
              />
            </div>
          ))
        }
        <button>Enviar</button>
      </form>
    </article>
  )

}

export default FilterSearch