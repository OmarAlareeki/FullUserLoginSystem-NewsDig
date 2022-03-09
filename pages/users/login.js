// pages/users/login.js
import { useState } from 'react';
import fire from '../../config/fire-config';
import { useRouter } from 'next/router';
import NavBar from '../../components/NavBar';
import { Container } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import styles from '../../styles/RegisterOrLogin.module.css'
import { AiFillGoogleCircle } from 'react-icons/ai'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [notify, setNotification] = useState('');
  const router = useRouter();
  const handleLogin = (e) => {
    e.preventDefault();
    fire.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        console.log(err.code, err.message)
        setNotification(err.message)
        setTimeout(() => {
          setNotification('')
        }, 2000)
      })
    setUsername('')
    setPassword('')
    router.push("/")
  }
  return (
    <div>
      <NavBar />
      <Container centerContent>
        <h1>Login</h1>
        {notify}
        <form className={styles.form} onSubmit={handleLogin}>
          Email<input className={styles.input} type="text" value={username}
            onChange={({ target }) => setUsername(target.value)} />
          <br />
          Password<input className={styles.input} type="password" value={password}
            onChange={({ target }) => setPassword(target.value)} />
          <br />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button className={styles.button} type="submit">Login</button>
            <button 
            style={{
                color: '#343a40',
                fontSize: '3.5rem',
                background: 'none',
                border: 'none'
              }}><AiFillGoogleCircle /></button>
          </div>
        </form>
      </Container>
    </div>
  )
}
export default Login