import Layout from "components/Layout"
import { useRouter } from 'next/router'
import FilterData from "components/FilterData"
import BySpecificFilter from "components/BySpecificFilter"


const Subject = () => {

  const router = useRouter()
  const Filter = BySpecificFilter(FilterData, router.query.subject)

  // Use HOC to the subjects of the page (community, date, etc)

  return (
    <section className ="flex-1">
      <Filter filter={router.query.subject} />
    </section>
  )
}

Subject.getLayout = (page) => {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Subject