import { useRouter } from "next/router";
import {db} from '../../../firebase'
import Notes from "./";

const NotesProject = () => {
    const router = useRouter()

    console.log(router.query.id)
    return (
        <Notes />
    );
}
 
export default Notes;