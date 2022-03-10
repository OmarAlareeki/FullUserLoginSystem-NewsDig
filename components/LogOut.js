import React, { useState } from 'react'
import fire from '../config/fire-config';

const LogOut = props => {
    const [notification, setNotification] = useState('');
    const handleLogout = () => {
        fire.auth()
            .signOut()
            .then(() => {
                setNotification('Logged out')
                setTimeout(() => {
                    setNotification('')
                }, 2000)
            });
    }

    return (
        <div>
            {notification}
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default LogOut
