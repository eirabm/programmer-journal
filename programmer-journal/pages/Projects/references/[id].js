import { useRouter } from "next/router";
import {db} from '../../../firebase'
import References from "./";

const ReferencesProject = () => {
    const router = useRouter()

    console.log(router.query.id)
    return (
        <References />
    );
}
 
export default ReferencesProject;