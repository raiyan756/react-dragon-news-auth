
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
export const AuthContex=createContext(null);
const AuthProvider = ({children}) => {

    const auth = getAuth(app);
    const [user,setUser]=useState(null);
  const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
  }
   useEffect(()=>{
    const Unsubs= onAuthStateChanged(auth,(createUser=>{
        console.log("state chanaged",createUser);
        setUser(createUser)
    }))
    return()=>{
        Unsubs()
    }
   },[])

   const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
   }

    const authInfo={
        user,createUser
    }
    return (
        <AuthContex.Provider value={authInfo} >
            {
                children
            }
        </AuthContex.Provider>
    );
};

export default AuthProvider;