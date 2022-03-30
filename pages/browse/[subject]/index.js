import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Layout from "components/Layout"
import useCollapse from 'react-collapsed'
import Loader from 'components/Icons/Loader'
import PreviewData from 'components/PreviewData'

const Subject = ({ subject }) => {

  const router = useRouter()
  const [loader, setLoader] = useState(null)
  const [data, setData] = useState(null)
  const [section, setSection] = useState(null)

  useEffect(() => {

    let url = process.env.NEXT_PUBLIC_STAGE === "development" ? process.env.NEXT_PUBLIC_REQUEST_URL_DEVELOPMENT : process.env.NEXT_PUBLIC_REQUEST_URL_PRODUCTION

    fetch(url)
      .then(res => res.ok ? res.json() : Promise.reject(''))
      .then(json => {
        const sectionsArray = []

        // Sort the results
        const sortedJson = json.results.bindings.sort((resultA, resultB) => {

          if (resultA[subject].value > resultB[subject].value) return 1
          if (resultA[subject].value < resultB[subject].value) return -1
          return 0
        })

        sortedJson.forEach((element, index) => {
          if (index === 0) {
            if (subject === "issued") {
              const year = element.issued.value.split('-')
              sectionsArray.push(year[0])
            } else {
              sectionsArray.push(element[subject].value.charAt(0).toUpperCase())
            }

            return
          }

          if (subject === "issued") {
            const year = element.issued.value.split('-')
            if (year[0] !== sectionsArray[index - 1]) {
              sectionsArray.push(year[0])
            }
          } else {
            const sectionTitle = element[subject].value.charAt(0).toUpperCase()
            if (sectionTitle !== sectionsArray[index - 1]) {
              sectionsArray.push(sectionTitle)
            }
          }

        });
        setLoader(true)
        setSection(sectionsArray)
        setData(sortedJson)
        console.log(sectionsArray, sortedJson)
      })
  }, [subject])

  return (
    <section className="flex-1 p-2">
      <h1 className="text-2xl font-semibold">
        Search by {subject}
      </h1>
      <hr className="mb-2" />
      {!loader && <Loader />}
      {data && section &&
        section.map((title, index) => {

          const dataResponse = data
          console.log(dataResponse)
          return (
            <PreviewData key={index} subject={subject} title={title} dataResponse={dataResponse} />
          )
        })
      }
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

const getServerSideProps = async (context) => {

  const { params } = context
  const { subject } = params

  return {
    props: {
      subject
    }
  }

}

export { getServerSideProps }

export default Subject