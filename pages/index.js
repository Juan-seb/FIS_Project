import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import FilterContext from 'context/FilterContext'
import Head from 'next/head'
import Layout from 'components/Layout'
import Link from 'next/link'

export default function Home() {

  const [search, setSearch] = useState('')
  const { sections } = useContext(FilterContext)
  const router = useRouter()

  const handleInput = (e) => {
    setSearch(e.target.value)
  }

  const handleClick = () => {
    localStorage.setItem('search', search)
    router.push('/browse')
  }

  return (
    <>
      <Head>
        <title>Open Data FIS Project</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="flex-1 my-4">
        <article className="flex flex-col justify-center items-center w-5/6 px-2 mx-auto">
          <h1 className="text-2xl text-black mx-1 text-center font-semibold mb-2 hover:-2">
            Repositorio Institucional Universidad Distrital - Proyecto FIS
          </h1>
          <p className="text-base text-black font-thin mb-2">
            El Repositorio Institucional de la Universidad Francisco José de Caldas RIUD es una herramienta donde
            se depositan los objetos digitales que corresponden a la producción intelectual de la Universidad para proteger,
            preservar, y difundir.
          </p>
          <p className="text-base text-black font-semibold w-full mb-2">
            Puedes buscar información por:
          </p>
          <nav className="flex flex-wrap justify-center w-full mb-2">
            {
              sections.map((section, index) => (
                <Link href={`/browse/${section.path}`} key={index}>
                  <a className="transition w-52 mx-1 text-center leading-loose underline rounded-md hover:bg-red-800 hover:text-white">{section.name}</a>
                </Link>
              ))
            }
          </nav>
          <p className="text-base text-black font-semibold w-full mb-2">
            Puedes buscar aqui:
          </p>
          <div className="w-full h-12 flex items-center justify-center mb-2">
            <input 
              type="text" 
              onChange={handleInput} 
              value={search} 
              className="w-60 h-10 px-2 outline-none border border-r-0 rounded-l-md" 
            />
            <button className="px-2 border rounded-r-md h-10" onClick={handleClick}>🔍</button>
          </div>
          <Link href="/browse" passHref className="w-full">
            <div className="w-full cursor-pointer">
              <a className="underline text-left">Click aqui para una busqueda personalizada</a>
            </div>
          </Link>
        </article>
      </section>
    </>
  )
}

Home.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
