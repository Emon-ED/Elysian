import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";


const Root = () => {
    return (
      <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </>
    );
};

export default Root;