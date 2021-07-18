import { useEffect, useState } from "react";
import {auth} from '../../firebase'
import { useRouter } from 'next/router'
import styles from './Navbar.module.scss'

const Navbar = (props) => {
  const router = useRouter()
  const [user, setUser] = useState(null)

  useEffect(() => {
    if (props.user) {
      setUser(props.user.email)
    }
  }, [props.user])

  const logOut = () => {
    auth.signOut()
    .then(
      router.push('/login')
    )
  }


      return(
        <header className={styles.navBar}>
        <div className={styles.logo}>
            <img src="https://img.favpng.com/4/8/9/swoosh-nike-logo-png-favpng-FxzS6fNjefZSZLJegDGbzP850.pg"/>
        </div>
  
        <nav>
          <ul>
            <li><p>{user && props.user.email}</p></li>
            <li><button onClick={logOut}>log out</button></li>
          </ul>
        </nav>
      </header>
    );
}

export default Navbar;