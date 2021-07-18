import { useEffect, useState } from "react";
import { auth } from '../../firebase'
import Navbar from "../Navbar/navbar";
import SideMenu from "../Aside/sideMenu";
import { useRouter } from 'next/router'

const Template = ({children}) => {
    const [user, setUser] = useState(null)
    const router = useRouter()

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
        <>
        {router.pathname !== '/login' && (<Navbar user={user} />)}
        {router.pathname !== '/login' && router.pathname !== '/' && (<SideMenu />)}
        {children}
        </>
     );
}
 
export default Template;