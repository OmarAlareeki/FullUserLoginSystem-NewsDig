import React from 'react'
import { useRouter } from "next/router";
import { Avatar } from '@chakra-ui/react';
import { FaUserCircle } from "react-icons/fa";
import { Image } from '@chakra-ui/react'

const NavBar = props => {
    const router = useRouter();
    return (
        <div style={{
            background: 'linear-gradient(120deg, #fff 0%, #343A40 100%)',
            display: 'flex',
            justifyContent: ' space-between'
        }}>
            <Image
                alt='NewsDig'
                src='../newsDigLogo.png'
                style={{
                    height: '80px',
                }}
                onClick={() => { router.push('/') }}
            />
            <Avatar size='xl' icon={<FaUserCircle fontSize='3.5rem' />} style={{ color: '#F8F9FA' }} />
        </div>
    )
}

export default NavBar
