import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {db} from '../firebase'
import Navbar from '../components/navbar'

const Home = (props) => {
  const router = useRouter()
  const [data, setData] = useState([])

  useEffect(() => {
    if (!props.user) {
      router.push('/login')
      return
    }
    
    db.collection(props.user.uid)
    .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => setData([...data, doc.data()]))
      })

  }, [props.user])

  


    const addproject = () => {
        
    }

    return ( 
        <>
        <Navbar user={props.user}/>
        <h1>Home</h1>
        {data && data.map((project) => (
          <div className="projectPreview">
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        ))}
        <button onClick={addproject}>Add Project</button>
        </>
     );
}
 
export default Home;
