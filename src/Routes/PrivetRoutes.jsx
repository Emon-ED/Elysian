import { useContext } from "react";
import { AuthContext } from "./ContextApi";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoutes = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
   
if(loading){
    return( 
    <span className="flex justify-center items-center">
        <span className="loading loading-dots loading-lg "></span>
     </span>
     )
}
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default PrivetRoutes;