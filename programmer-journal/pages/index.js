import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {db} from '../firebase'
import styles from '../styles/pages.module.scss'
import Link from 'next/link'

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
        snapshot.docs.forEach((doc) => setDocs((prevDocs) => [...prevDocs, Object.assign(doc.data(), {"id" : doc.id })]))
      })

  }, [props.user])

    const addproject = () => {
      router.push('/projects')
    }

    return ( 
        <div className={styles.pageContainer}>
        <h1>Hello!</h1>
        <p>{docs.length ? 'Here are all your projects!':'Create a project!'} </p>
        <div className={styles.cardContainer}>
        {docs && docs.map((project) => (
          <div className={styles.card} key={project.id}>
          <div className={styles.info}>
            <span className={styles.name}>{project.name}</span>
            <p>{project.description}</p>
          </div>
          <div className={styles.open}>
            <Link href={'/projects/'+project.id}>Open project</Link>
          </div>
          </div>
        ))}
        </div>
        <button onClick={addproject}>Add Project</button>
        </div>
     );
}
 
export default Home;
