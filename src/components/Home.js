import React, {useContext} from 'react';
import UserContext from '../components/UserContext';
import login from './login';



const Home = () => {
    const {user, setUser} = useContext(UserContext);
    return (
        <div>
            <h2>This is "Home" page </h2>
            {
                user ?
                <div>
                    <h3>User Name: {user.username}</h3>
                    <p>Email: {user.email}</p>
                </div>
                :
                <h3>Not Logged In</h3>
            }
            {
                user ? <button onClick={()=> setUser(null)}>Log Out</button>
                :
                <button onClick={async ()=> {
                    const user = await login();
                setUser(user);
                }}>Login</button>
            }
        </div>
    );
};

export default Home;