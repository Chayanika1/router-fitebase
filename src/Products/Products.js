import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
import useFireBase from '../Hooks/useFireBase';
const auth = getAuth(app)

const Products = () => {
    {/*const {user} = useFireBase()*/}
    const[user] = useAuthState(auth)
    return (
        <div>
            <h2>knock knock who is there?</h2>
            <h5>{user?user.displayName:'nobody'}</h5>
            
        </div>
    );
};

export default Products;