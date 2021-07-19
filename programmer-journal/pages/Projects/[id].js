import { useRouter } from "next/router";
import ProjectsPage from ".";

const OpenProject = (props) => {
    const router = useRouter()

    return ( 
        <>
            <ProjectsPage doc={router.query.id}/>
        </>
    );
}

export default OpenProject;