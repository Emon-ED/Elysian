import { createContext, useEffect, useState } from "react";
import auth from "../Sensetive/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



export const AuthContext = createContext(null);

const ContextApi = ({children}) => {

// Get user and its Info -----------
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
 
// Creat a New User ---------------
const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
};
// Login with firebase ---------------------
const loginUser=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password)
};
// Login with google -----------
const signWithGoogle =(provider)=>{
    setLoading(true);
    return signInWithPopup(auth,provider);
};
// Log out User ----------
 const logOut =()=>{
    setLoading(true);
    return signOut(auth);
 };
// Use OnState Change -----------
useEffect(()=>{
 const unsubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser);
    setLoading(false);
});
return ()=>{
    unsubscribe();
}
},[]);

console.log(user)
const AuthInfo ={
    user,
    loading,
    createUser,
    loginUser,
    signWithGoogle,
    logOut,
    setUser,
};


    return (
   <AuthContext.Provider value={AuthInfo}>
    {children}
   </AuthContext.Provider>
    );
};

export default ContextApi;