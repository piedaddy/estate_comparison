import React from "react";
import "./Results.scss";

export default function AResults({
  estateA,
  aFloorSmaller,
  aPriceLower,
  aLandSmaller,
}) {

  const priceWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const price = priceWithSpaces(estateA.prize_czk);

  return (
    <div className="result">
      {estateA.images ? (
        <div className="result__images">
          <img className="result__image" src={estateA.images[0]} alt="estate"></img>
        </div>
      ) : (
        ""
      )}
      <p className="result__name">{estateA.name}</p>
      <div className="result__info">
        <div className={`items__price  ${aPriceLower ? "green" : "red"}`}>
          <p className="items__title">Price </p>
          <p>{price} Kč</p>
        </div>
        <div className="items__locality">
          <p className="items__title">Locality </p>
          <p>{estateA.locality}</p>
        </div>
        <div className={`items__floor ${aFloorSmaller ? "red" : "green"}`}>
          <p className="items__title">Floor area </p>
          <p>
            {estateA.building_area} m<sup>2</sup>
          </p>
        </div>
        <div className={`items__land ${aLandSmaller ? "red" : "green"}`}>
          <p className="items__title">Land area </p>
          <p>
            {estateA.land_area} m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="company">
        {estateA.company_logo ? (
          <img
            src={estateA.company_logo}
            alt="Company logo"
            className="company__logo"
          ></img>
        ) : (
          ""
        )}
        {estateA.company_name ? <p className="company__name">{estateA.company_name}</p> : ""}
      </div>
    </div>
  );
}
