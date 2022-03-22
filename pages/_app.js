import { FilterProvider } from '../context/FilterContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)

  return (
    <FilterProvider>
      {getLayout(<Component {...pageProps} />)}
    </FilterProvider>
  )
}

export default MyApp
