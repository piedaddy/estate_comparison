import React, { useEffect, useState } from "react";
import Results from "../Results/Results";
import "./SearchResults.css";

export default function SearchResults() {
  const [estateImages, setEstateImages] = useState([]);
  const [firstOffset, setFirstOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [a, setA] = useState({});
  const [b, setB] = useState({});
  const secondOffset = firstOffset + 10;

  let showNext;
  let showPrevious;

  const getList = async () => {
    const response = await fetch(
      "https://estate-comparison.codeboot.cz/list.php"
    );
    const data = await response.json();
    setEstateImages(data);
    console.log(data[0].images);
  };

  const handleShowNextList = () => {
    setFirstOffset(firstOffset + 10);
  };

  const handleShowPreviousList = () => {
    setFirstOffset(firstOffset - 10);
  };

  const handleSetChoice = (est) => {
    setCount(count + 1);
    if (count % 2 === 1) {
      setB(est);
      console.log("b", b);
    }
    if (count % 2 === 0) {
      setA(est);
      console.log("a", a);
    }
    console.log(count);
  };

  useEffect(() => {
    getList();
  }, []);

  const photos = estateImages.slice(firstOffset, secondOffset).map((est) => {
    // console.log('est', est)
    const pics = est.images[0];
    const name = est.name_extracted;
    showPrevious = firstOffset > 0;
    showNext = secondOffset < estateImages.length;
    return (
      <div className="header_indie" key={est.id}>
        <img 
          src={pics}
          alt="Estate"
          className="header header-images"
          onClick={() => handleSetChoice(est)}
        ></img>
        <p>{name}</p>
      </div>
    );
  });

  return (
    <div>
      hi
      <div className="header">
        {showPrevious ? (
          <button onClick={handleShowPreviousList}>Previous Results</button>
        ) : (
          ""
        )}
        {photos}
        {showNext ? (
          <button onClick={handleShowNextList}>Next Results</button>
        ) : (
          ""
        )}
      </div>
      {a ? <Results a={a} b={b} aPic = {a.images}/> : ""}
      {/* <button onClick={getList}>click</button> */}
    </div>
  );
}
