import React, { useEffect, useState } from "react";
import AResults from "./AResults";
import BResults from "./BResults";

import "./Results.scss";

export default function Results({ estateA, estateB, count, areSame }) {
  const [aPriceLower, setAPriceLower] = useState(true);
  const [aFloorSmaller, setAFloorSmaller] = useState(true);
  const [aLandSmaller, setALandSmaller] = useState(true);
  let aPrice = estateA.prize_czk;
  let bPrice = estateB.prize_czk;
  let aFloor = parseInt(estateA.building_area);
  let bFloor = parseInt(estateB.building_area);
  let aLand = parseInt(estateA.land_area);
  let bLand = parseInt(estateB.land_area);

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
        estateA={estateA}
        aLandSmaller={aLandSmaller}
        aFloorSmaller={aFloorSmaller}
        aPriceLower={aPriceLower}
      />
      {!areSame ? (
        <BResults
         estateB={estateB}
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

