import { useState, useEffect } from 'react';
import { auth } from '../firebase'
import { useRouter } from 'next/router'

const Login = (props) => {
    const router = useRouter()

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    function handleOnChange(e) {
        const { id, value } = e.target 
        const newObject = { ...inputs, [id]: value }
        setInputs(newObject)
    }

    function handleSubmit(e) {
        e.preventDefault()
        auth.signInWithEmailAndPassword(inputs.email, inputs.password)
    }
    
    useEffect(() => {
        if (props.user) {
            router.push('/')
        }
    }, [props.user])

    return ( 
        <>
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail: </label>
                <input id="email" type="email" value={inputs.email} onChange={handleOnChange} />
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" value={inputs.password} onChange={handleOnChange} />
                <input type="submit" value="Log in" />
            </form>
        </>
     );
}
 
export default Login;