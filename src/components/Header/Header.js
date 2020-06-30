import React, {useEffect, useState} from 'react';
import './Header.scss';

export default function Header () {
  const [estateImages, setEstateImages] = useState([]);

  const getHeaderList = async() => {
    const response = await fetch('https://estate-comparison.codeboot.cz/list.php');
    const data = await response.json();
    setEstateImages(data)
    console.log(data)
  };

  const handleNextList = () => {

  };

  const handlePreviousList = () => {

  };

  const photos = estateImages.map(est => { 
    const pics = est.images 
    return (
      {pics}
    )
  });


  return (
    <div>
      <button onClick={handleNextList}></button>
      {photos}
      <button onClick={handlePreviousList}></button>
    </div>
  )

};