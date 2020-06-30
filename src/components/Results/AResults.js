import React, { useEffect, useState } from "react";
import "./Results.scss";

export default function AResults({ a, b, count, aFloorSmaller, aPriceLower, aLandSmaller  }) {
  //const [imgUrl, setImgUrl] = useState("");

  return (
    <div className="results result">
      {a.images ? (
        <div className="results result__images">
          <img
            className="results result__image"
            src={a.images[0]}
            alt="estate"
          ></img>
        </div>
      ) : (
        ""
      )}
      <p>{a.name}</p>
      <div className="results info">
        <div
          className={`results info-items info__price ${
            aPriceLower ? "green" : "red"
          }`}
        >
          <p className="results info-items title">Price: </p>
          <p>{a.prize_czk} Kč</p>
        </div>
        <div className="results info-items info__locality">
          <p className="results info-items title">Locality: </p>
          <p>{a.locality}</p>
        </div>
        <div
          className={`results info-items info__floor ${
            aFloorSmaller ? "red" : "green"
          }`}
        >
          <p className="results info-items title">Floor area: </p>{" "}
          <p>
            {a.building_area} m<sup>2</sup>
          </p>
        </div>
        <div
          className={`results info-items info__land ${
            aLandSmaller ? "red" : "green"
          }`}
        >
          <p className="results info-items title">Land area: </p>{" "}
          <p>
            {a.land_area}m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="results company">
        {a.company_logo ? (
          <img
            src={a.company_logo}
            alt="company logo"
            className="results company__logo"
          ></img>
        ) : (
          ""
        )}
        {a.company_name ? <p>{a.company_name}</p> : ""}
      </div>
    </div>
  );
}
