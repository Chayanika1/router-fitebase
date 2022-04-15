import { getAuth,signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../firebase.init';
//import useFireBase from '../Hooks/useFireBase';
import './Header.css'
const auth = getAuth(app)

const Header = () => {
   // const {user,handleSignOut} = useFireBase()
   const[user] = useAuthState(auth)
    return (
        <div className='header'>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Orders">Order</Link>
            <Link to="/Login">Login</Link>
            <Link to="/Register">Register</Link>
           <span>{user?.displayName && user.displayName}</span>
            
            
                {/*user?.uid?<button onClick={handleSignOut}>SignOut</button>:
            <Link to="/LogIn">Login</Link>*/}
            {
                user?.uid?<button onClick={()=>signOut(auth)}>SignOut</button>:
                <Link to="/LogIn">Login</Link>

            }
            

            </nav>
            
            
        </div>
    );
};

export default Header;