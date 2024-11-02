import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Routes/ContextApi";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


const Register = () => {

    const { createUser}= useContext(AuthContext);
  
    
    // State Place ------
    
    const [success,setSuccess]= useState('');
    const [error,setError]= useState('');
    const [showPass, setShowPass]= useState(true);


    const handleRegister = e =>{
        e.preventDefault();

        // Input Value ---------

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuccess('');
        setError('');


        createUser(email,password)
        .then(result=>{
    if (result){
      setSuccess('Register Successfully...!')
    }
        })
        .catch(error=>{

        if(password.length<6 ){
        setError('Your password should contain at least 6')
        }
        else if(!/[A-Z]/.test(password)){
        setError('Your password should contain at least 1 uppercase')
        }
        if(!/[0-9]/.test(password)){
        setError('Your password should contain at least 1 number')
        }
        })
    };

    // show pass ----------
const handlePass =()=>{
  setShowPass(!showPass)
  console.log(showPass)
}


    return (
      <>
        <div className="hero bg-base-200 min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse mx-8">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
            Welcome! Register today to unlock exclusive access to our <br></br> features. Simply fill out the form below to create your account and join our community.
            </p> 
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input  name="email" type="email" placeholder="email" className="input input-bordered w-11/12" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <span className='flex w-full'>
             <input  name="password" type={showPass? "password":"text" } placeholder="password" className="input input-bordered w-11/12" required /><span  onClick={handlePass}>
{
  showPass?<FaRegEyeSlash className='relative top-4 right-7' />:<FaRegEye className='relative top-4 right-7' />
}
             
           </span>
             </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="p-5">Already Have a Account? <Link to={'/login'}><button className="btn btn-link">Login</button></Link></p>
          </div>
        </div>
      </div>
<div className="p-5">
        {
          success && <p className="text-2xl text-green-600 text-center">{success}</p>
       
        }

        {
          error && <p className="text-2xl text-red-600 text-center">{error}</p>
        }
</div>
</>
    );
};

export default Register;