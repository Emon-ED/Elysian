import { useContext } from "react";
import { AuthContext } from "../Routes/ContextApi";


const UserProfile = () => {
    const{user}=useContext(AuthContext);
    const {displayName,phoneNumber,email}=user
    console.log(user)
    return (
        <div className="mx-auto p-6">
            <h1 className=" underline text-center text-2xl font-bold">User Information</h1>
            <div className="text-left p-5">
            <h1 className=" text-xl font-semibold">Name: {displayName? displayName: 'No Name'}</h1>
            <h1 className=" text-xl font-semibold">Phone Number:{phoneNumber? phoneNumber: 'No Number'}</h1>
            <h1 className=" text-xl font-semibold">Email: {email? email: 'No Email'}</h1>
        </div>
        </div>
    );
};

export default UserProfile;