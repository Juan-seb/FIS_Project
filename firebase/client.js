import { initializeApp, getApps } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBU8MNahFRtl2ewO847jDYYGsUM83BN7gk",
  authDomain: "proyect-fis.firebaseapp.com",
  projectId: "proyect-fis",
  storageBucket: "proyect-fis.appspot.com",
  messagingSenderId: "62923957282",
  appId: "1:62923957282:web:947910f72bca7edbcd167b",
  measurementId: "G-DCRVCQHPQV"
}

!getApps.length && initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()

const signIn = async () => {
  try {
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.log(error)
  }
}

const stateUserChange = async (setState) => {
  try {
    await auth.onAuthStateChanged(user => {
      if (user?.emailVerified && user?.email.endsWith('@correo.udistrital.edu.co')) {
        setState(user)
      } else {
        auth.signOut().then(() => {
          setState(null)
        })
      }
    })
  } catch (error) {
    
  }
}

export { signIn, stateUserChange }