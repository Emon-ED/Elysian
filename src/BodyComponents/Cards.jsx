import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  const {
    estate_title,
    id,
    property_name,
    description,
    price,
    status,
    area,
    location,
    img,
    facilities,
  } = card;
 
  return (
    <div className="sm:col-span-1 card bg-base-100 w-96 shadow-xl">
      <figure className="px-7 pt-10">
        <img src={img} className="rounded-xl" />
      </figure>
      <div className="card-body items-left text-left">
        <h2 className="card-title">{property_name}</h2>
        <p className="mb-2">{description}</p>
        <h2 className="mb-2 font-semibold">For: {status}</h2>

        <div className="card-actions flex justify-between items-center">
          <Link to={`/details/${id}`}>
            {" "}
            <button className="btn btn-primary">Details</button>
          </Link>
          <h2 className="mb-2 font-semibold">
            Price:<span className="text-green-600"> {price}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cards;
