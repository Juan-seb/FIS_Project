import LayoutAdmin from "components/LayoutAdmin"
import Content from "components/LayoutAdmin/Content"
import useUser from 'hooks/useUser'

const RequestAuthors = () => {

  useUser()

  return(
    <div className="w-full h-[calc(100vh-68px)] px-2 py-2 overflow-y-scroll">
      Authors
    </div>
  )
}

RequestAuthors.getLayout = (page) => {
  return (
    <LayoutAdmin>
      <Content>
        {page}
      </Content>
    </LayoutAdmin>
  )
}

export default RequestAuthors