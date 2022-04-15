import { getAuth } from 'firebase/auth';
import React from 'react'
//import useFireBase from '../Hooks/useFireBase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../firebase.init';




const auth = getAuth(app)

const Login = () => {
    const[signInWithGoogle,user]=useSignInWithGoogle(auth)
   // const {signInWithGoogle} = useFireBase()
    return (
        <div>
            <h4>please login</h4>
            <div>
            {/*<button onClick={signInWithGoogle}>Signin Google</button>*/}
             <button onClick={()=>signInWithGoogle()}>Signin Google</button>
            </div>
            
            <form>
               
                <input type="email" placeholder="ypur email"/>
                <br/>
                <input type="password" placeholder='password'/>
                <br/>
                <input type="submit" value="Login"/>

            </form>
        </div>
    );
};

export default Login;