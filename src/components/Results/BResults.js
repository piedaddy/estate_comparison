import React from "react";
import "./Results.scss";

export default function BResults({
  b,
  aPriceLower,
  aLandSmaller,
  aFloorSmaller,
}) {
  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const price = numberWithSpaces(b.prize_czk);

  return (
    <div className="result">
      {b.images ? (
        <div className="result__images">
          <img className="result__image" src={b.images[0]} alt="estate"></img>
        </div>
      ) : (
        ""
      )}
      <p className="result__name">{b.name}</p>
      <div className="result__info">
        <div className={`items__price ${aPriceLower ? "red" : "green"}`}>
          <p className="items__title">Price </p>
          <p>{price} Kč</p>
        </div>
        <div className="items__locality">
          {" "}
          <p className="items__title">Locality </p>
          <p>{b.locality}</p>
        </div>
        <div className={`items__floor ${aFloorSmaller ? "green" : "red"}`}>
          <p className="items__title">Floor area </p>
          <p>
            {b.building_area} m<sup>2</sup>
          </p>
        </div>
        <div className={`items__land ${aLandSmaller ? "green" : "red"}`}>
          <p className="items__title">Land area </p>
          <p>
            {b.land_area} m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="company">
        {b.company_logo ? (
          <img
            src={b.company_logo}
            alt="company logo"
            className="company__logo"
          ></img>
        ) : (
          ""
        )}
        {b.company_name ? (
          <p className="company__name">{b.company_name}</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
