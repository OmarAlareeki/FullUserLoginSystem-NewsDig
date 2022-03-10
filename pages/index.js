import { useState, useEffect } from 'react';
import Head from 'next/head';
import fire from '../config/fire-config';
import { Container } from '@chakra-ui/react';
import BlogList from '../components/BlogList'
import CreatePost from '../components/CreatePost';
import RegisterOrLogin from '../components/RegisterOrLogin';
import NavBar from '../components/NavBar'

const Home = () => {

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
            <BlogList />
            {loggedIn && <CreatePost />}
        </div>
    )
}
export default Home;