import { useState, useEffect } from 'react'
import Layout from "components/Layout"

const Browse = () => {

  const [wordToSearch, setWordToSearch] = useState('')

  useEffect(() => {
    
    let word = localStorage.getItem('search')
    word && setWordToSearch(word)

  }, [])

  return (
    <section className="flex-1 px-4 my-4">
      <h1 className="text-2xl font-semibold">
        Customized Search
      </h1>
      <hr />
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