import { useState, useEffect } from 'react'
import Layout from "components/Layout"
import FilterSearch from 'components/FilterSearch'
import PreviewData from 'components/PreviewData'

const Browse = () => {

  const [dataResponse, setDataResponse] = useState(null)

  const handleSubmit = (e, data) => {
    e.preventDefault()
  }

  useEffect(() => {

    let url = process.env.NEXT_PUBLIC_STAGE === "development" ? process.env.NEXT_PUBLIC_REQUEST_URL_DEVELOPMENT : process.env.NEXT_PUBLIC_REQUEST_URL_PRODUCTION
    let query = `
    PREFIX bib: <http://zeitkunst.org/bibtex/0.1/bibtex.owl#>
    PREFIX date: <http://contextus.net/ontology/ontomedia/misc/date#>
    PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
    PREFIX ds: <http://purl.org/ctic/dcat#>
    PREFIX dsp: <http://purl.org/metainfo/terms/dsp#>
    PREFIX fo: <http://purl.org/ontology/fo/>
    PREFIX bibo: <http://purl.org/ontology/bibo/>
    PREFIX dc: <http://purl.org/dc/elements/1.1/>
    PREFIX dct: <http://purl.org/dc/terms/>
    PREFIX dcterm: <http://purl.org/dc/terms/>
    prefix dcterms: <http://purl.org/dc/terms/> 
    prefix dspace:  <http://digital-repositories.org/ontologies/dspace/0.1.0#> 
    prefix foaf:    <http://xmlns.com/foaf/0.1/> 
    prefix rdf:     <http://www.w3.org/1999/02/22-rdf-syntax-ns#> 
    prefix void:    <http://rdfs.org/ns/void#> 
    SELECT ?tittle ?alternative ?creator ?contributor ?issued ?date ?abstract ?issn ?publisher ?language ?hasPart WHERE { 
      GRAPH ?g { 
        ?recurso dcterms:title ?tittle. 
        ?recurso dcterms:alternative ?alternative.  
        ?recurso dc:creator ?creator .             
        ?recurso dc:contributor ?contributor.      
        ?recurso dcterms:issued ?issued.            
        ?recurso dc:date ?date.
        ?recurso dcterms:abstract ?abstract.
        ?recurso bibo:issn ?issn.          
        ?recurso dc:publisher ?publisher.          
        ?recurso dc:language ?language.         
        ?recurso dcterms:hasPart ?hasPart.
    }}
    `
    localStorage.getItem('search') && fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject(''))
      .then(json => {
        setDataResponse(json.results.bindings)
      })


  }, [])

  return (
    <section className="flex-1 px-4 my-4">
      {/* Add the filters of the request */}
      <FilterSearch
        handleSubmit={handleSubmit}
      />
      {/* Add the results of the request */}
      <h1 className="text-xl">Results</h1>
      <hr className="mb-2"/>
      <div className="flex flex-wrap w-full">
        {dataResponse &&
          dataResponse.map((dataI, indexData) => (
            <div key={indexData} className="w-full flex-grow !max-h-min p-2 mx-2 mb-4 rounded-lg bg-gray-300 sm:w-[45%] md:w-[30%]">
              <h2>{dataI.title.value}</h2>
              <hr className='mb-2 bg-gray-400' />
              <details className="mb-1">
                <summary>Abstract</summary>
                <p>{dataI.abstract.value}</p>
              </details>
              <div>
                <p className='inline mr-1 font-semibold'>Issued date:</p>
                <p className='inline'>{dataI.issued.value}</p>
              </div>

              <div>
                <p className='inline mr-1 font-semibold'>ISSN:</p>
                <p className='inline'>{dataI.issn.value}</p>
              </div>

              <div>
                <p className='inline mr-1 font-semibold'>Creator:</p>
                <p className='inline'>{dataI.creator.value}</p>
              </div>
            </div>
          ))
        }
      </div>
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