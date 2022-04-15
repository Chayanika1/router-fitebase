import { useEffect, useState } from "react"
import app from "../firebase.init";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";



const provider = new GoogleAuthProvider()
const auth = getAuth(app);

const useFireBase=()=>{
    const[user,setUser]=useState({});
    

    const signInWithGoogle=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const user = result.user;
            console.log(user);
            
        })
        .catch(error=>console.error(error));
        

    }
    const handleSignOut=()=>{
        signOut(auth)
        .then(()=>{

        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);

            
        })

    },[])
    return {user,signInWithGoogle,handleSignOut}
}
export default useFireBase;