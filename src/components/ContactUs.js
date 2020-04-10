import React from 'react';
import { useContext } from 'react';
import UserContext from './UserContext';


const ContactUs = () => {
    const {user} = useContext(UserContext);
    return (
        <div>
            <h1>This is "Contact Us" page</h1>
            {
                user ?
                <div>
                    <h3>User Name: {user.username}</h3>
                    <p>Email: {user.email}</p>
                </div>
                :
                <h3>Not Logged In</h3>
            }
        </div>
    );
};

export default ContactUs;