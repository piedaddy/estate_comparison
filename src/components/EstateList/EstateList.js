import React, { useEffect, useState } from "react";
import EstateChoices from "../EstateChoices/EstateChoices";
import "./EstateList.scss";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function EstateList() {
  const [estateImages, setEstateImages] = useState([]);
  const [firstOffset, setFirstOffset] = useState(0);
  const [isLoadedA, setIsLoadedA] = useState(false);
  const [isLoadedB, setIsLoadedB] = useState(false);
  const [estateA, setEstateA] = useState({});
  const [estateB, setEstateB] = useState({});
  //count is used to determine which click represents estate A and estate B
  const [count, setCount] = useState(0);
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

  const handleSetChoice = (estate) => {
    setCount(count + 1);
    if (count % 2 === 0) {
      setEstateA(estate);
      setIdA(estate.id);
      setIsLoadedA(true);
    }
    if (count % 2 === 1) {
      setEstateB(estate);
      setIdB(estate.id);
      setIsLoadedB(true);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  const estateImageList = estateImages.slice(firstOffset, secondOffset).map((estate) => {
    const estatePic = estate.images[0];
    const name = estate.name_extracted;
    const place = estate.locality;
    areSame = estateA.id === estateB.id;
    showPrevious = firstOffset > 0;
    showNext = secondOffset < estateImages.length;
    const isSelected = setIsLoadedA || setIsLoadedB;
    const showLetterB = idB === estate.id;
    const showLetterA = idA === estate.id;
    return (
      <div
        className={`list__photos ${ showLetterA || showLetterB ? "chosen" : ""}`}
        key={estate.id}
      >
        <img
          src={estatePic}
          alt="Estate"
          className={`photo`}
          onClick={() => {
            handleSetChoice(estate);
          }}
        ></img>
        {isSelected && (
          <div className="list__letter-wrapper">
            <div className="list__letter">
              {showLetterA ? <p>A</p> : ""}
              {!areSame && showLetterB ? <p>B</p> : ""}
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

          {estateImageList}

          {showNext ? (
            <div className="list__button">
              <ArrowForwardIcon onClick={handleShowNextList} />
            </div>
          ) : (
            ""
          )}
        </div>
        {isLoadedA && isLoadedB ? (
          <EstateChoices
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
