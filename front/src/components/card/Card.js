import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

export const Card = (props) => {
  return (
    <div className="card card-home">
      {/* <img src="http://http2.mlstatic.com/D_916062-MLA43654417337_102020-I.jpg" className="card-img-top" alt="iphone 11"/> */}
      <Link className="card-home-img-link" to={`/homes/${props.id}`}>
        {props.type === "house" ? (
          <img src="/home.png" className="card-home-img-top" alt="Icon Home" />
        ) : (
          <img
            src="/loft.png"
            className="card-home-img-top loft"
            alt="Icon Loft"
          />
        )}
      </Link>
      <div className="card-home-body">
        <div className="card-home-body-description">
          <h5 className="card-home-title">{props.name}</h5>
          <p className="card-home-text">{props.address}</p>
        </div>
      </div>
    </div>
  );
};
