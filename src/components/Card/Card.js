import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, species } = x;

      return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4 position-relative text-dark">
  <div className={`${styles.card} card border-0 rounded-lg shadow-lg`} style={{ width: "100%", height: "100%" }}>
    <img className={`${styles.img} card-img-top`} src={image} alt="" />
    <div className={`${styles.content} card-body d-flex flex-column justify-content-center`}>
      <Link
        style={{ textDecoration: "none", color: "green" }} 
        to={`${page}${id}`}
        key={id}
        className="fs-5 fw-bold mb-4"
      >
        {name}
      </Link>
      <div className="fs-5">{species}</div>
      <div>
          <div>Status:{status}</div>;
      </div>
    </div>
  </div>
</div>

      );
    });
  } else {
    display = "Characters not found with the specified search criteria";
  }

  return <>{display}</>;
};

export default Card;