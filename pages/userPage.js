import React, { useState } from 'react';
import LogOut from '../components/LogOut';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';
import { Container, Button } from '@chakra-ui/react';

const userPage = props => {
    const router = useRouter();
    return (
        <>
            <NavBar />
            <Container centerContent>
                <LogOut />
                <Button  colorScheme='blue' onClick={() => { router.push('/') }}>Back
                </Button>
            </Container>

        </>
    )
}

export default userPage
