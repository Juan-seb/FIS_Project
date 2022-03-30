import useCollapse from 'react-collapsed'

const PreviewData = ({ subject, title, dataResponse }) => {

  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <article>
      <div
        {...getToggleProps()}
        className="w-full h-10 mx-auto p-2 mb-2 bg-red-800 text-white rounded-lg "
      >
        {isExpanded ? `${title}` : `${title}`}
      </div>
      <div {...getCollapseProps()} >
        <div className="flex w-full">
          {
            dataResponse.map((dataI, indexData) => {
              if (subject === "issued" && (title === dataI[subject].value.split('-')[0])) {
                dataResponse.slice(indexData)
                return (
                  <div className="w-full !max-h-min p-2 mx-1 mb-4 rounded-lg bg-gray-300 sm:w-2/4 md:w-1/3">
                    <p>{dataI.title.value}</p>
                    <p>{dataI.issued.value}</p>
                  </div>
                )
              }

              if (dataI[subject].value.charAt(0).toUpperCase() === title) {
                dataResponse.slice(indexData)
                return (
                  <div className="w-full !max-h-min p-2 mx-1 mb-4 rounded-md bg-gray-300 sm:w-2/4 md:w-1/3">
                    <p>{dataI.title.value}</p>
                    <p>{dataI.issued.value}</p>
                  </div>
                )
              }
            })
          }
        </div>
      </div>

    </article>
  )
}

export default PreviewData