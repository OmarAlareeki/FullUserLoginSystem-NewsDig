import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from "next/router";
import fire from '../config/fire-config';
import { Container } from '@chakra-ui/react';
import BlogList from '../components/BlogList'
import CreatePost from '../components/CreatePost';
import RegisterOrLogin from '../components/RegisterOrLogin';
import NavBar from '../components/NavBar';
import Link from 'next/link';
import styles from '../styles/Home.module.css'

const Home = () => {
    const router = useRouter();
    const [loggedIn, setLoggedIn] = useState(false);

    fire.auth()
        .onAuthStateChanged((user) => {
            if (user) {
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
        })

    return (
        <div>
            <Head>
                <title>News Dig</title>
                <link rel="icon" href="/digfav.png" />
            </Head>
            <NavBar />
            {!loggedIn && <RegisterOrLogin />}
            {loggedIn && <Link href={{ pathname: '/createPost' }}><a className={styles.createPost}>CREATE A POST</a></Link>}
            <BlogList />
        </div>
    )
}
export default Home;