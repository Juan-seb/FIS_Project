import { useState, useEffect } from 'react'
import { signIn, stateUserChange } from "@fbs/client"
import { useRouter } from 'next/router'
import Google from "components/Icons/Google"
import LayoutAdmin from "components/LayoutAdmin"
import useUser, { USER_STATES } from 'hooks/useUser'


const Login = () => {

  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace('/admin')
  }, [user])

  const handleClick = () => {
    signIn()
  }

  return (
    <div className="w-4/5 h-min my-auto mx-auto">
      <p className="mb-2 text-lg text-center text-black text-thin">Ingresa con tu cuenta institucional.</p>
      {
        user === USER_STATES.NOT_KNOWN &&
        <p className="w-full text-center">Comprobando....</p>
      }
      {
        user === USER_STATES.NOT_LOGIN &&
        <button onClick={handleClick} className="flex h-10 mx-auto border rounded-md border-blue-400">
          <div className="w-10 h-full py-1 border-r border-blue-400">
            <Google width={30} height={30} />
          </div>
          <p className="w-48 h-full bg-blue-500 text-white leading-[2.3rem]">Log in with Google</p>
        </button>
      }
    </div>
  )

}

Login.getLayout = (page) => {
  return (
    <LayoutAdmin>
      {page}
    </LayoutAdmin>
  )
}

export default Login