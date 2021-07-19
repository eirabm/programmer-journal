import Link from 'next/link'
import { useEffect, useState } from 'react'
import { auth } from '../../firebase'
import styles from './sideMenu.module.scss'

const SideMenu = (props) => {
    const [user, setUser] = useState(null)

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
        <div className={styles.asideMenu}>
            <ul>
                <li><Link href={{pathname: `/projects/notes/${props.doc?'[id]':''}`, query: {id: props.doc, data: JSON.stringify(user)}}}>Notes</Link></li>
                <li><Link href={{pathname: `/projects/snippets/${props.doc?'[id]':''}`, query: {id: props.doc}}}>Code Snippets</Link></li>
                <li><Link href={{pathname: `/projects/references/${props.doc?'[id]':''}`, query: {id: props.doc}}}>References</Link></li>
                <li><Link href={{pathname: `/projects/Editor/${props.doc?'[id]':''}`, query: {id: props.doc}}}>Realtime Editor</Link></li>
                <li><Link href={'/'}>Home</Link></li>
            </ul>
        </div>
      );
}
 
export default SideMenu;