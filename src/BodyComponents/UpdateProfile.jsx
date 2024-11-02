import { updateProfile } from "firebase/auth";
import auth from "../Sensetive/firebase.config";
import { useState } from "react";


const UpdateProfile = () => {

    const [success,setSuccess]= useState('');
    const [error,setError]= useState('');

const handleUpdate = e =>{
    e.preventDefault();
    const name = e.target.name.value;
    const img = e.target.photoUrl.value;
    const number = e.target.number.value;
    console.log(name,img);
    setSuccess('');
    setError('');
    updateProfile(auth.currentUser,{displayName:name,photoURL:img,phoneNumber:number})
    .then(result=>{
        setSuccess('Upadate SuccessFully..!');

    })
    .catch(error=>{
        setError('Something Wrong Please check again..!')
    })
}

    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-4">Update Your Profile</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleUpdate} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input name="photoUrl" type="text" placeholder="Photo Url" className="input input-bordered"  />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input name="number" type="text" placeholder="Phone Number" className="input input-bordered"  />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>
          </div>
          {
            success && <p className="text-center text-green-400">{success}</p> 
          }
          {
            error && <p className="text-center text-red-400">{error}</p>
          }
        </div>
      </div>
    );
};

export default UpdateProfile;