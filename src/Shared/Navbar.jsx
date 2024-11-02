import { Link } from "react-router-dom";
import img from "../assets/logo-removebg-preview.png";
import { useContext } from "react";
import { AuthContext } from "../Routes/ContextApi";

const Navbar = () => {
  // context api -----------
  const {user,logOut}= useContext(AuthContext);


const handleLogOut= () =>{
  logOut();
}

  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/updateProfile"}>Update Profile</Link>
      </li>
      <li>
        <Link to={"/property"}>Property</Link>
      </li>
      <li>
        <Link to={"/userProfile"}>User Profile</Link>
      </li>
    </>
  );

 




  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <img className="w-14" src={img} alt="" />
        </a>
        <Link to={'/'} className="btn btn-ghost text-xl">Elysian</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
      {
      user ? <p>{user.email} <button onClick={handleLogOut} className="btn btn-link">Logout</button></p>

    :
  <>
    <Link to={"/register"}>
    <button className="btn btn-link">Register</button>
  </Link> 
  <Link to={"/login"}>
    <button className="btn btn-link">Login</button>
  </Link>
  </>
    } 
      </div>
    </div>
  );
};

export default Navbar;
