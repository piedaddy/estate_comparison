import React, { useEffect, useState } from "react";
import Results from "../Results/Results";
import "./SearchResults.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function SearchResults() {
  const [estateImages, setEstateImages] = useState([]);
  const [firstOffset, setFirstOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoadedA, setIsLoadedA] = useState(false);
  const [isLoadedB, setIsLoadedB] = useState(false);
  const [a, setA] = useState({});
  const [b, setB] = useState({});
  // const [isA, setIsA] = useState(false);
  // const [isB, setIsB] = useState(false);
  const [idA, setIdA] = useState(0);
  const [idB, setIdB] = useState(0);
  const secondOffset = firstOffset + 10;
  let showNext;
  let showPrevious;
  let areSame;


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
    if (count % 2 === 0) {
      setA(est);
      setIdA(est.id);
      // setIsA(!isA);
      setIsLoadedA(true);
      console.log("a", a);
    }
    if (count % 2 === 1) {
      setB(est);
      setIdB(est.id);
      // setIsB(!isB);
      setIsLoadedB(true);
      console.log("b", b);
    }
   
  };

  useEffect(() => {
    getList();
  }, []);

  const photos = estateImages.slice(firstOffset, secondOffset).map((est) => {
    const pics = est.images[0];
    const name = est.name_extracted;
    const place = est.locality;
    areSame = a.id === b.id;
    showPrevious = firstOffset > 0;
    showNext = secondOffset < estateImages.length;
    const isSelected = (setIsLoadedA || setIsLoadedB);
    return (
      <div
        className={`header__photos ${idA === est.id || idB === est.id ? "chosen" : ""}
        }`}
        key={est.id}
      >

        <img
          src={pics}
          alt="Estate"
          className={`photo`}
          onClick={() => {
            handleSetChoice(est);
          }}
        ></img>{" "}
        {isSelected && (
          <div className="header__letter-wrapper">
            <div className="header__letter">
              {/* <p> */}
              {idA === est.id ? <p>A</p> : ""} {!areSame && idB === est.id ? <p>B</p> : ""}
              {/* </p> */}
            </div>
          </div>
        )}
        <p className="description">
          {name} {place}
        </p>
      </div>
    );
  });

  return (
    <div>
      <div className="header">
        <div className="header__list">
          {showPrevious ? (
            <div className="header__button">
              <ArrowBackIcon onClick={handleShowPreviousList} />
            </div>
          ) : (
            ""
          )}

          {photos}

          {showNext ? (
            <div className="header__button">
              <ArrowForwardIcon onClick={handleShowNextList} />
            </div>
          ) : (
            ""
          )}
        </div>
        {isLoadedA && isLoadedB ? (
          <Results a={a} b={b} aPic={a.images} count={count} areSame={areSame} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
