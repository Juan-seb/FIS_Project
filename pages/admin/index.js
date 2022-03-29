import { useState, useContext } from 'react'
import LayoutAdmin from "components/LayoutAdmin"
import useUser from "hooks/useUser"
import Content from 'components/LayoutAdmin/Content'
import FilterContext from 'context/FilterContext'

const Admin = () => {

  useUser()
  const {filters, setFilters} = useContext(FilterContext)

  return (
    <div className="w-full h-[calc(100vh-68px)] px-4 py-2 overflow-y-scroll">
      <h3 className="text-xl font-semibold ">
        General configurations.
      </h3>
      <hr className="mb-2 border-slate-400"/>
      <p>Filtros:</p>
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