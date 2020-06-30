import React, { useEffect, useState } from "react";
import AResults from "./AResults";
import BResults from "./BResults";

import "./Results.scss";

export default function Results({ a, b, count }) {
  //const [imgUrl, setImgUrl] = useState("");
  const [aPriceLower, setAPriceLower] = useState(true);
  const [aFloorSmaller, setAFloorSmaller] = useState(true);
  const [aLandSmaller, setALandSmaller] = useState(true);
  const areSame = a.id === b.id;
  let aFloor = parseInt(a.building_area);
  let bFloor = parseInt(b.building_area);
  let aLand = parseInt(a.land_area);
  let bLand = parseInt(b.land_area);

  const compareResults = () => {
    if (a.prize_czk > b.prize_czk) {
      setAPriceLower(false);
    }
    if (a.prize_czk < b.prize_czk) {
      setAPriceLower(true);
    }
    if (aFloor > bFloor) {
      setAFloorSmaller(false);
    }
    if (aFloor < bFloor) {
      setAFloorSmaller(true);
    }
    if (aLand > bLand) {
      setALandSmaller(false);
    }
    if (aLand < bLand) {
      setALandSmaller(true);
    }
  };

  useEffect(() => {
    compareResults();
  }, [count]);

  return (
    <div className="results">
      <AResults
        a={a}
        aLandSmaller={aLandSmaller}
        aFloorSmaller={aFloorSmaller}
        aPriceLower={aPriceLower}
      />

      {/*
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
        </div> */}

      {!areSame ? (
        // <div className="results result">
        //   {b.images ? (
        //     <div className="results result__images">
        //       <img
        //         className="results result__image"
        //         src={b.images[0]}
        //         alt="estate"
        //       ></img>
        //     </div>
        //   ) : (
        //     ""
        //   )}
        //   <p>{b.name}</p>
        //   <div className="results info">
        //     <div
        //       className={`results info-items info__price ${
        //         aPriceLower ? "red" : "green"
        //       }`}
        //     >
        //       <p className="results info-items title">Price: </p>{" "}
        //       <p>{b.prize_czk} Kč</p>
        //     </div>
        //     <div className="results info-items info__locality">
        //       {" "}
        //       <p className="results info-items title">Locality: </p>{" "}
        //       <p>{b.locality}</p>
        //     </div>
        //     <div
        //       className={`results info-items info__floor ${
        //         aFloorSmaller ? "green" : "red"
        //       }`}
        //     >
        //       <p className="results info-items title">Floor area: </p>{" "}
        //       <p>
        //         {b.building_area} m<sup>2</sup>
        //       </p>
        //     </div>
        //     <div
        //       className={`results info-items info__land ${
        //         aLandSmaller ? "green" : "red"
        //       }`}
        //     >
        //       <p className="results info-items title">Land area: </p>{" "}
        //       <p>
        //         {b.land_area} m<sup>2</sup>
        //       </p>
        //     </div>
        //   </div>
        //   <div className="results company">
        //     {b.company_logo ? (
        //       <img
        //         src={b.company_logo}
        //         alt="company logo"
        //         className="results company__logo"
        //       ></img>
        //     ) : (
        //       ""
        //     )}
        //     {b.company_name ? (
        //       <p className="results company__name">{b.company_name}</p>
        //     ) : (
        //       ""
        //     )}
        //   </div>
        // </div>
        <BResults
          b={b}
          aLandSmaller={aLandSmaller}
          aFloorSmaller={aFloorSmaller}
          aPriceLower={aPriceLower}
        />
      ) : (
        <div className="results identical-response">
          please pick another estate
        </div>
      )}
    </div>
  );
}
