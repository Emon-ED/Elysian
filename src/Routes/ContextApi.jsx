import { createContext } from "react";
import auth from "../Sensetive/firebase.config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";



export const AuthContext = createContext(null);

const ContextApi = ({children}) => {

const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

const loginUser=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

const signWithGoogle =(provider)=>{
    return signInWithPopup(auth,provider);
}


const AuthInfo ={
    createUser,
    loginUser,
    signWithGoogle,
}
    return (
   <AuthContext.Provider value={AuthInfo}>
    {children}
   </AuthContext.Provider>
    );
};

export default ContextApi;