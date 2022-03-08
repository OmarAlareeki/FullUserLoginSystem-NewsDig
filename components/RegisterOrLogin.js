import React from 'react';
import { Container } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../styles/RegisterOrLogin.module.css';

const RegisterOrLogin = props => {
    return (
        <Container centerContent style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            justifyContent: 'center',
            height: '90vh'
        }}>
            <Link
                href="/users/register">
                <a className={styles.alink} >Register</a>
            </Link>
            <Link
                href="/users/login">
                <a className={styles.alink} > Login</a>
            </Link>
        </Container >
    )
}


export default RegisterOrLogin
