import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email)
        setUser(user)
      } else {
        console.log('user is logged out')
        setUser(false)
      }
    })
  }, [])

  return <Component {...pageProps} user={user}/>
}

export default MyApp
