import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const details = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const showDetail = details.find((detail) => detail.id == idInt);

  const {
    img,
    estate_title,
    property_name,
    description,
    status,
    area,
    location,
    facilities,
    price,
  } = showDetail;

  return (
    <div className="mx-16">
       <h1 className="underline text-2xl font-bold">
          Property Name: {property_name}
        </h1>
      <div className="p-5">
        <img
          className="rounded w-12/12 mx-auto"
          src={img}
          alt="Property Image"
        />
      </div>
      <div className=" space-y-3">
      <h1 className="underline text-xl font-bold">
          Estate Name: {estate_title}
        </h1>
        <p className="  font-semibold">
          Description: <br />
          {description}
        </p>
        <h1 className="font-semibold">Area: {area}.</h1>
        <h1 className="font-semibold">Location: {location}.</h1>
        <h1 className="font-semibold">Facilities: {facilities}.</h1>
        <h1 className="font-semibold">Status: {status}.</h1>
        <h1 className="font-semibold ">
          Price: <span className="text-green-600">{price}.</span>{" "}
        </h1>
        <p className="p-4 text-center">
        <button className="mx-auto btn btn-primary">Intrested </button>
        </p>
      </div>
    </div>
  );
};

export default Details;
