import { useEffect, useState } from 'react'
import { auth } from '../firebase'
import '../styles/globals.css'
import Template from '../components/Template/Template'

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

  return (
  
  <Template >
  <Component {...pageProps} user={user}/>
  </ Template>
  )
}

export default MyApp
