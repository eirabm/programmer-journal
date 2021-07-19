import SideMenu from "../../components/Aside/sideMenu";

const ProjectsPage = (props) => {
    console.log(props)
    return ( 
        <>
        <SideMenu doc={props.doc}/>
        <h1>pez</h1>
        </>    
        );
}
 
export default ProjectsPage;