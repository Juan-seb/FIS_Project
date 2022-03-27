import { useState } from 'react'
import LayoutAdmin from "components/LayoutAdmin"
import useUser from "hooks/useUser"
import Content from 'components/LayoutAdmin/Content'

const Admin = () => {

  useUser()

  return (
    <div className="w-full h-[calc(100vh-68px)] px-2 py-2 overflow-y-scroll">
      Hola
    </div>
  )
}

Admin.getLayout = (page) => {
  return (
    <LayoutAdmin>
      <Content>
        {page}
      </Content>
    </LayoutAdmin>
  )
}

export default Admin