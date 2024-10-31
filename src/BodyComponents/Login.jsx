import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Routes/ContextApi';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';


const Login = () => {


  const {loginUser,signWithGoogle}= useContext(AuthContext);

const handleLogin = e =>{
  e.preventDefault();
  // State Place ------------


  // Get Input Value ----------
  const email = e.target.email.value;
  const password = e.target.password.value;
 
// LogIn wirh email password ---------
  loginUser(email,password)
  .then(result=>console.log(result.user))
  .catch(error=>console.error(error))

}

// Login with Google popups-------------
const provider = new GoogleAuthProvider();

const popUp=()=>{
  signWithGoogle(provider)
  .then(result=>console.log(result.user))
  .catch(error=>  console.log(error))

}

    return (
      <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse mx-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
          Welcome back! Log in to access your account and continue where you left off.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input  name="email" type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input  name="password" type="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
           
          </form>
         <button onClick={popUp} className="mx-8 hover:bg-slate-900"> <p className='text-xl flex justify-center items-center border rounded p-2'><FaGoogle className='me-4' /> Login with Google</p></button>
          <p className="p-5">Do Not Have a Account? <Link to={'/register'}><button className="btn btn-link">Register</button></Link></p>
        </div>
      </div>
    </div>
    );
};

export default Login;