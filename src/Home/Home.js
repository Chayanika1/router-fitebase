import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../firebase.init';
//import useFireBase from '../Hooks/useFireBase';
const auth = getAuth(app)
const Home = () => {
    //const{user} = useFireBase()
    const[user] = useAuthState(auth)
    return (
       
        <div>
            
            <h2>this is home</h2>
           {/* <p>current user  is : {user? user.displayName: 'nobody'}</p>*/}
           <p>current user  is : {user? user.displayName: 'nobody'}</p>
            
        </div>
    );
};

export default Home;