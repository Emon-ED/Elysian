import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Routes/ContextApi";


const Register = () => {

    const { createUser}= useContext(AuthContext);
    

    const handleRegister = e =>{
        e.preventDefault();


        // State Place ------


        // Input Value ---------
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email,password)
        .then(result=>console.log(result))
        .catch(error=>console.error(error))
    }



    return (
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
                <input  name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input  name="password" type="password" placeholder="password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="p-5">Already Have a Account? <Link to={'/login'}><button className="btn btn-link">Login</button></Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;