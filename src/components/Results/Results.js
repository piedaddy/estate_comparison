import React, { useEffect, useState } from "react";
import AResults from "./AResults";
import BResults from "./BResults";

import "./Results.scss";

export default function Results({ a, b, count, areSame }) {
  const [aPriceLower, setAPriceLower] = useState(true);
  const [aFloorSmaller, setAFloorSmaller] = useState(true);
  const [aLandSmaller, setALandSmaller] = useState(true);
  // const areSame = a.id === b.id;
  let aPrice = a.prize_czk;
  let bPrice = b.prize_czk;
  let aFloor = parseInt(a.building_area);
  let bFloor = parseInt(b.building_area);
  let aLand = parseInt(a.land_area);
  let bLand = parseInt(b.land_area);

  const compareResults = () => {
    if (aPrice > bPrice) {
      setAPriceLower(false);
    }
    if (aPrice < bPrice) {
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
      {!areSame ? (
        <BResults
          b={b}
          aLandSmaller={aLandSmaller}
          aFloorSmaller={aFloorSmaller}
          aPriceLower={aPriceLower}
        />
      ) : (
        <div className="identical-response">
          Please pick another estate.
        </div>
      )}
    </div>
  );
}

