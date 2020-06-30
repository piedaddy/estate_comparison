import React from "react";
import "./Results.scss";

export default function ResultsB({
  estateB,
  priceLowerA,
  floorSmallerA,
  landSmallerA
}) {
  //convert price integer into integer representing currency
  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const price = numberWithSpaces(estateB.prize_czk);

  return (
    <div className="result">
      {estateB.images ? (
        <div className="result__images">
          <img className="result__image" src={estateB.images[0]} alt="estate"></img>
        </div>
      ) : (
        ""
      )}
      <p className="result__name">{estateB.name}</p>
      <div className="result__info">
        <div className={`items__price ${priceLowerA ? "red" : "green"}`}>
          <p className="items__title">Price </p>
          <p>{price} Kč</p>
        </div>
        <div className="items__locality">
          {" "}
          <p className="items__title">Locality </p>
          <p>{estateB.locality}</p>
        </div>
        <div className={`items__floor ${floorSmallerA ? "green" : "red"}`}>
          <p className="items__title">Floor area </p>
          <p>
            {estateB.building_area} m<sup>2</sup>
          </p>
        </div>
        <div className={`items__land ${landSmallerA ? "green" : "red"}`}>
          <p className="items__title">Land area </p>
          <p>
            {estateB.land_area} m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="company">
        {estateB.company_logo ? (
          <img
            src={estateB.company_logo}
            alt="company logo"
            className="company__logo"
          ></img>
        ) : (
          ""
        )}
        {estateB.company_name ? (
          <p className="company__name">{estateB.company_name}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
