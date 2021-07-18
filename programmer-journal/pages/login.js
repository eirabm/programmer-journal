import { useState, useEffect } from 'react';
import { auth } from '../firebase'
import { useRouter } from 'next/router'
import styles from '../components/Login/login.module.scss'

const Login = (props) => {
    const router = useRouter()

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const [active, setActive] = useState(true)

    function handleOnChange(e) {
        const { id, value } = e.target 
        const newObject = { ...inputs, [id]: value }
        setInputs(newObject)
    }

    function loginSubmit(e) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(inputs.email, inputs.password)
    }

    function signupSubmit(e) {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(inputs.email, inputs.password)
    }
    
    useEffect(() => {
        if (props.user) {
            router.push('/')
        }
    }, [props.user])

    return ( 
        <>

            <div className={styles.loginContainer}>

            <div className={styles.optionsHeader}>
      <p className={active ? styles.active : ''}>Login</p>
      <p className={active ? '' : styles.hidden}>Sign Up</p>
    </div>
    <div className={styles.socialLogin}>
        <img src="https://img.icons8.com/color/452/google-logo.png" />
        <img src="https://image.flaticon.com/icons/png/512/25/25231.png" />
    </div>
        <form className={styles.emailLogin} onSubmit={loginSubmit}>
            <label htmlFor="email">E-mail: </label>
            <input id="email" type="email" value={inputs.email} onChange={handleOnChange} />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" value={inputs.password} onChange={handleOnChange} />
            <input type="submit" value="Log in" />
        </form>

        <form className={styles.emailSignup} onSubmit={signupSubmit}>
        <label htmlFor="email">E-mail: </label>
            <input id="email" type="email" value={inputs.email} onChange={handleOnChange} />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" value={inputs.password} onChange={handleOnChange} />
            <input type="submit" value="Sign up" />
        </form>
  </div>
        </>
     );
}
 
export default Login;