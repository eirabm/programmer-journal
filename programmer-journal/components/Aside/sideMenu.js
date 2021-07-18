import Link from 'next/link'
import styles from './sideMenu.module.scss'

const SideMenu = () => {
    return (
        <div className={styles.asideMenu}>
            <ul>
                <li><Link href={'/notes'}>Notes</Link></li>
                <li><Link href={'/snippets'}>Code Snippets</Link></li>
                <li><Link href={'/Editor'}>Realtime Editor</Link></li>
                <li><Link href={'/'}>Home</Link></li>
            </ul>
        </div>
      );
}
 
export default SideMenu;