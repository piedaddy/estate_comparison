import React, { useEffect, useState } from "react";
import Results from "../Results/Results";
import "./EstateList.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function SearchResults() {
  const [estateImages, setEstateImages] = useState([]);
  const [firstOffset, setFirstOffset] = useState(0);
  const [count, setCount] = useState(0);
  const [isLoadedA, setIsLoadedA] = useState(false);
  const [isLoadedB, setIsLoadedB] = useState(false);
  const [estateA, setEstateA] = useState({});
  const [estateB, setEstateB] = useState({});
  //idA and idB are used to ensure only selected estates have a styling change
  const [idA, setIdA] = useState(0);
  const [idB, setIdB] = useState(0);
  const secondOffset = firstOffset + 10;
  let showNext;
  let showPrevious;
  let areSame;

  const getList = async () => {
    const response = await fetch("https://estate-comparison.codeboot.cz/list.php");
    const data = await response.json();
    setEstateImages(data);
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
      setEstateA(est);
      setIdA(est.id);
      setIsLoadedA(true);
    }
    if (count % 2 === 1) {
      setEstateB(est);
      setIdB(est.id);
      setIsLoadedB(true);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const photos = estateImages.slice(firstOffset, secondOffset).map((est) => {
    const pics = est.images[0];
    const name = est.name_extracted;
    const place = est.locality;
    areSame = estateA.id === estateB.id;
    showPrevious = firstOffset > 0;
    showNext = secondOffset < estateImages.length;
    const isSelected = setIsLoadedA || setIsLoadedB;
    return (
      <div
        className={`list__photos ${ idA === est.id || idB === est.id ? "chosen" : ""}`}
        key={est.id}
      >
        <img
          src={pics}
          alt="Estate"
          className={`photo`}
          onClick={() => {
            handleSetChoice(est);
          }}
        ></img>
        {isSelected && (
          <div className="list__letter-wrapper">
            <div className="list__letter">
              {idA === est.id ? <p>A</p> : ""}
              {!areSame && idB === est.id ? <p>B</p> : ""}
            </div>
          </div>
        )}
        <div className="description">
          <p>
            {name} {place}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="list">
        <div className="list__list">
          {showPrevious ? (
            <div className="list__button">
              <ArrowBackIcon onClick={handleShowPreviousList} />
            </div>
          ) : (
            ""
          )}

          {photos}

          {showNext ? (
            <div className="list__button">
              <ArrowForwardIcon onClick={handleShowNextList} />
            </div>
          ) : (
            ""
          )}
        </div>
        {isLoadedA && isLoadedB ? (
          <Results
            estateA={estateA}
            estateB={estateB}
            imageA={estateA.images}
            count={count}
            areSame={areSame}
          />
        ) : (
          <div className="list__preSelection">Select estates from above.</div>
        )}
      </div>
    </div>
  );
}
