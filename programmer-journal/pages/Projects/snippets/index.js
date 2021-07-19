import styles from '../../../styles/pages.module.scss'
import Editor from '../../../Components/Editor/Editor';
import { useState } from 'react';
import SideMenu from '../../../components/Aside/sideMenu';

const Snippets = () => {
    const [actualCode, setActualCode] = useState('')

    return ( 
        <>
        <SideMenu />

        <div className={styles.pageContainer}>

        <h1>Code Snippets</h1>
        <p></p>

        <div className={styles.editorCont}>
            <Editor language="xml" value={actualCode} onChange={setActualCode} displayName="HTML"/>
        </div>

            <div className={styles.cardContainer}>
                
            </div>
        </div>
        </>
     );
}
 
export default Snippets;