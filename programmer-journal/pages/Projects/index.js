import SideMenu from "../../components/Aside/sideMenu";

const ProjectsPage = (props) => {

    console.log(props.doc, props.user)

    return ( 
        <>
        <SideMenu doc={props.doc}/>
        <h1>pez</h1>
        </>    
        );
}
 
export default ProjectsPage;