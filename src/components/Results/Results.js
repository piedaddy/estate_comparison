import React, { useEffect, useState } from "react";
import "./Results.css";

export default function Results({ a, b, aPic }) {
  //const [imgUrl, setImgUrl] = useState("");

  return (
    <div className="results main">
      <div className="results_a">
        {a.images ? (
          <div className="results_image">
            <img
              className="results_estate_image"
              src={a.images[0]}
              alt="estate"
            ></img>
          </div>
        ) : (
          ""
        )}
        <p>{a.name}</p>
        <div className="results_info">
          <div className="results_price">
            <p>Price:</p> <p>{a.prize_czk}Kč</p>
          </div>
          <div className="results_locality">
            {" "}
            <p>Locality:</p> <p>{a.locality}</p>
          </div>
          <div className="results_floor">
            <p>Floor area:</p> <p>{a.building_area}m<sup>2</sup></p>
          </div>
          <div className="results_land">
            <p>Land area:</p> <p>{a.land_area}m<sup>2</sup></p>
          </div>
        </div>
        <div className="results_company">
          {a.company_logo ? (
            <img src={a.company_logo} alt="company logo"></img>
          ) : (
            ""
          )}
          {a.company_name ? <p>{a.company_name}</p> : ""}
        </div>
      </div>

      <div className="results_b">{b.name}</div>
    </div>
  );
}
