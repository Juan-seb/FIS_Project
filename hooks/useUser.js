import { useState, useEffect } from 'react'
import { stateUserChange } from '@fbs/client'
import { useRouter } from 'next/router'

const USER_STATES = {
  NOT_LOGIN: null,
  NOT_KNOWN: undefined,
}

const useUser = () => {

  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    stateUserChange(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGIN && router.replace('/login')
  }, [user])

  return user

}

export { USER_STATES }

export default useUser