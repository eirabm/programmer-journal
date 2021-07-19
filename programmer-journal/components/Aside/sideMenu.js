import Link from 'next/link'
import styles from './sideMenu.module.scss'

const SideMenu = (props) => {

    return (
        <div className={styles.asideMenu}>
            <ul>
                <li><Link href={{pathname: `/projects/notes/${props.doc?'[id]':''}`, query: {id: props.doc}}}>Notes</Link></li>
                <li><Link href={{pathname: `/projects/snippets/${props.doc?'[id]':''}`, query: {id: props.doc}}}>Code Snippets</Link></li>
                <li><Link href={{pathname: `/projects/references/${props.doc?'[id]':''}`, query: {id: props.doc}}}>References</Link></li>
                <li><Link href={{pathname: `/projects/Editor/${props.doc?'[id]':''}`, query: {id: props.doc}}}>Realtime Editor</Link></li>
                <li><Link href={'/'}>Home</Link></li>
            </ul>
        </div>
      );
}
 
export default SideMenu;