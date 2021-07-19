import { useEffect, useState } from "react";
import { auth } from '../../firebase'
import Navbar from "../Navbar/navbar";
import { useRouter } from 'next/router'

const Template = ({children}) => {
    const [user, setUser] = useState(null)
    const router = useRouter()

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(false)
        }
      })
    }, [])


    return ( 
        <>
        {router.pathname !== '/login' && (<Navbar user={user} />)}
        {children}
        </>
     );
}
 
export default Template;