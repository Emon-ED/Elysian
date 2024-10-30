import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
    return (
        <div className="text-center mt-36 space-y-4 ">
            <h2 className="text-6xl">Opsss...!</h2>
            <h2 className="text-9xl">404</h2>
            <h2 className="text-4xl">Not Found</h2>
            <h2 className="text-xl ">Please Go back Home</h2>
            <Link to={'/'}><button className="btn btn-primary"><FaArrowLeft></FaArrowLeft> Go Back</button></Link>
            

        </div>
    );
};

export default ErrorPage;