import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {db} from '../firebase'

const Home = (props) => {
  const router = useRouter()
  const [docs, setDocs] = useState([])

  useEffect(() => {
    if (!props.user) {
      router.push('/login')
      return
    }

    db.collection(props.user.uid)
    .get()
      .then((snapshot) => {
        snapshot.docs.forEach((doc) => setDocs((prevDocs) => [...prevDocs, doc.data()])
        )
      })

  }, [props.user])

    const addproject = () => {
      router.push('/projects')
    }

    console.log(docs)

    return ( 
        <>
        <h1>Home</h1>
        {docs && docs.map((project) => (
          <div className="projectPreview" key={docs.id}>
            <h1>{project.name}</h1>
            <p>{project.description}</p>
          </div>
        ))}
        <button onClick={addproject}>Add Project</button>
        </>
     );
}
 
export default Home;
