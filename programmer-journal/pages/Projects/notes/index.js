import SideMenu from "../../../components/Aside/sideMenu";
import styles from '../../../styles/pages.module.scss'

const Notes = (props) => {
    return (
        <>
        <SideMenu />
        <h1>Notes</h1>
        {props.notes && props.notes.forEach((note) =>(
            <div className ={styles.card} >
                <div className={styles.info}>
                <span className={styles.name}>{note.name}</span>
                <p>{note.content}</p>
                </div>
            </div>
        ))}
        </>
    );
}
 
export default Notes;