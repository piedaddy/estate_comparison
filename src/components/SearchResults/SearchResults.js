import React, { useEffect, useState } from "react";
import Results from "../Results/Results";
import "./SearchResults.scss";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export default function SearchResults() {
  const [estateImages, setEstateImages] = useState([]);
  const [firstOffset, setFirstOffset] = useState(0);
  const [count, setCount] = useState(0);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedA, setIsLoadedA] = useState(false);
  const [isLoadedB, setIsLoadedB] = useState(false);


  const [aPriceLower, setAPriceLower] = useState(true);

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
      setIsLoadedB(true)
      //compareResults();
      console.log("b", b);
    }
    if (count % 2 === 0) {
      setA(est);
      setIsLoadedA(true);
      //compareResults();

      console.log("a", a);
    }
    console.log(count);
  };


  // const compareResults = () => {
  //   if(a.prize_czk > b.prize_czk) {
  //     setAPriceLower(false);
  //   }
  //   if(a.prize_czk < b.prize_czk) {
  //     setAPriceLower(true);
  //   }
  //   console.log('compare working')
  // }; 


  useEffect(() => {
    getList();
  }, []);

  const photos = estateImages.slice(firstOffset, secondOffset).map((est) => {
    const pics = est.images[0];
    const name = est.name_extracted;
    const place = est.locality;
    showPrevious = firstOffset > 0;
    showNext = secondOffset < estateImages.length;
    return (
      <div className="header header__photos" key={est.id}>
        <img
          src={pics}
          alt="Estate"
          className="header header__photos photo"
          onClick={() => {handleSetChoice(est);}}
        ></img>
        <p className="header header__photos description">
          {name} {place}
        </p>
      </div>
    );
  });

  return (
    <div>
      <div className="header">
        <div className="header header__list">
          {showPrevious ? (
            <div className="header header__button-container">
              <ArrowBackIcon
                className="header header__button button"
                onClick={handleShowPreviousList}
              />
            </div>
          ) : (
            ""
          )}

          {photos}

          {showNext ? (
            <div className="header header__button-container">
              <ArrowForwardIcon
                className="header header__button button"
                onClick={handleShowNextList}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        {isLoadedA && isLoadedB ? <Results a={a} b={b} aPic={a.images} count={count}  /> : ""}
      </div>
    </div>
  );
}
