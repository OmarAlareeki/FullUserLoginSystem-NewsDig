// pages/users/register.js
import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import { Container } from '@chakra-ui/react';
import styles from '../../styles/RegisterOrLogin.module.css';
import { Button } from '@chakra-ui/react'

const Register = () => {
    const router = useRouter();
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passConf, setPassConf] = useState('');
    const [notification, setNotification] = useState('');


    const handleLogin = (e) => {
        e.preventDefault();
        if (password !== passConf) {
            setNotification(
                'Password and password confirmation does not   match'
            )
            setTimeout(() => {
                setNotification('')
            }, 2000)
            setPassword('');
            setPassConf('');
            return null;
        }
        fire.auth()
            .createUserWithEmailAndPassword(userName, password)
            .catch((err) => {
                console.log(err.code, err.message)
            });
        router.push("/")
    }
    return (
        <div>
            <NavBar />
            <Container centerContent>
                <h1>Create new user</h1>
                {notification}
                <form className={styles.form} onSubmit={handleLogin}>
                    Email: <input className={styles.input} type="text" value={userName}
                        onChange={({ target }) => setUsername(target.value)} />
                    <br />
                    Password1: <input className={styles.input} type="password" value={password}
                        onChange={({ target }) => setPassword(target.value)} />
                    <br />
                    Password2: <input className={styles.input} type="password" value={passConf}
                        onChange={({ target }) => setPassConf(target.value)} />
                    <br />
                    <button className={styles.button} type="submit">Register</button>
                </form>
            </Container>
        </div>
    )
}
export default Register