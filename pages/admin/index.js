import LayoutAdmin from "components/Layout/LayoutAdmin"
import useUser from "hooks/useUser"

const Admin = () => {

  const user = useUser()

  return (
    <>
      Hola soy el admin
    </>
  )
}

Admin.getLayout = (page) => {
  return (
    <LayoutAdmin>
      {page}
    </LayoutAdmin>
  )
}

export default Admin