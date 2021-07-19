import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {db} from '../../../firebase'
import styles from '../../../styles/pages.module.scss'

import Notes from "./";

const NotesProject = (props) => {
    const router = useRouter()
    const [notes, setNotes] = useState(null)


    useEffect(()=>{

        db.collection(props.user.uid).doc(router.query.id)
        .get()
        .then((doc) => setNotes(doc.data().notes))

    }, [])

    console.log(notes)

    return (
        <>
        {notes && notes.map((note) =>(
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
 
export default NotesProject;