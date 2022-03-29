import { useState } from 'react'
import Layout from "components/Layout"
import FilterSearch from 'components/FilterSearch'
import PreviewData from 'components/PreviewData'

const Browse = () => {

  const [dataResponse, setDataResponse] = useState(null)
  
  const handleSubmit = (e, data) => {
    e.preventDefault()
    console.log("hola")
  }

  return (
    <section className="flex-1 px-4 my-4">
      {/* Add the filters of the request */}
      <FilterSearch
        handleSubmit={handleSubmit}
      />
      {/* Add the results of the request */}
      <PreviewData
        dataResponse={dataResponse}
      />
    </section>
  )
}

Browse.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Browse