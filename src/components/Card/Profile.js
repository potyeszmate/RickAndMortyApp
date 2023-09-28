import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState({});
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container text-center mt-5">
      <Link to="/" className="navbar-brand fs-3 fontStyle text-decoration-none">
        &larr; Back
      </Link>

      <div className="row justify-content-center mt-4">
        <div className="col-lg-6">
          <h1 className="mb-4">{name}</h1>

          <img className="img-fluid rounded-circle" src={image} alt={name} />
          <div className="mb-3">
              <span className="fw-bold">Species:</span> {species}
            </div>
          <div className="mt-3">
            <div className="mb-3">
              <span className="fw-bold">Gender:</span> {gender}
            </div>
           
            
            <div className="mb-3">
              <span className="fw-bold">Origin:</span> {origin?.name}
            </div>
            <div className="mb-3">
              <span className="fw-bold">Location:</span> {location?.name}
            </div>
            <div className="mb-3">
              <span className="fw-bold">Status:</span>{" "}
              <span
                className={`badge ${
                  status === "Dead"
                    ? "bg-danger"
                    : status === "Alive"
                    ? "bg-success"
                    : "bg-secondary"
                } fs-5`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
