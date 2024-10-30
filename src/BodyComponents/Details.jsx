import { useParams } from "react-router-dom";


const Details = () => {
    const {id}= useParams();
    return (
        <div>
            this is details of card {id}
            git init
        </div>
    );
};

export default Details;