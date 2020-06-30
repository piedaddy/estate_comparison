import React, { useEffect, useState } from "react";
import ResultsA from "./ResultsA";
import ResultsB from "./ResultsB";

import "./Results.scss";

export default function Results({ estateA, estateB, count, areSame }) {
  const [priceLowerA, setPriceLowerA] = useState(true);
  const [floorSmallerA, setFloorSmallerA] = useState(true);
  const [landSmallerA, setLandSmallerA] = useState(true);
  let priceA = estateA.prize_czk;
  let priceB = estateB.prize_czk;
  let floorA = parseInt(estateA.building_area);
  let floorB = parseInt(estateB.building_area);
  let landA = parseInt(estateA.land_area);
  let landB = parseInt(estateB.land_area);

  const compareResults = () => {
    if (priceA > priceB) {
      setPriceLowerA(false);
    }
    if (priceA < priceB) {
      setPriceLowerA(true);
    }
    if (floorA > floorB) {
      setFloorSmallerA(false);
    }
    if (floorA < floorB) {
      setFloorSmallerA(true);
    }
    if (landA > landB) {
      setLandSmallerA(false);
    }
    if (landA < landB) {
      setLandSmallerA(true);
    }
  };

  useEffect(() => {
    compareResults();
  }, [count]);

  return (
    <div className="results">
      <ResultsA
        estateA={estateA}
        priceLowerA={priceLowerA}
        floorSmallerA={floorSmallerA}
        landSmallerA={landSmallerA}
      />
      {!areSame ? (
        <ResultsB
          estateB={estateB}
          priceLowerA={priceLowerA}
          floorSmallerA={floorSmallerA}
          landSmallerA={landSmallerA}
        />
      ) : (
        <div className="identical-response">
          Please pick another estate listing.
        </div>
      )}
    </div>
  );
}
