import React from "react";
import "./Results.scss";

export default function AResults({
  a,
  aFloorSmaller,
  aPriceLower,
  aLandSmaller,
}) {

  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  const price = numberWithSpaces(a.prize_czk);

  return (
    <div className="result">
      {a.images ? (
        <div className="result__images">
          <img className="result__image" src={a.images[0]} alt="estate"></img>
        </div>
      ) : (
        ""
      )}
      <p className="result__name">{a.name}</p>
      <div className="result__info">
        <div className={`items__price  ${aPriceLower ? "green" : "red"}`}>
          <p className="items__title">Price </p>
          <p>{price} Kč</p>
        </div>
        <div className="items__locality">
          <p className="items__title">Locality </p>
          <p>{a.locality}</p>
        </div>
        <div className={`items__floor ${aFloorSmaller ? "red" : "green"}`}>
          <p className="items__title">Floor area </p>
          <p>
            {a.building_area} m<sup>2</sup>
          </p>
        </div>
        <div className={`items__land ${aLandSmaller ? "red" : "green"}`}>
          <p className="items__title">Land area </p>
          <p>
            {a.land_area} m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="company">
        {a.company_logo ? (
          <img
            src={a.company_logo}
            alt="Company logo"
            className="company__logo"
          ></img>
        ) : (
          ""
        )}
        {a.company_name ? <p className="company__name">{a.company_name}</p> : ""}
      </div>
    </div>
  );
}

// import React from "react";
// import "./Results.scss";

// export default function AResults({
//   a,
//   aFloorSmaller,
//   aPriceLower,
//   aLandSmaller,
// }) {
//   return (
//     <div className="result">
//       {a.images ? (
//         <div className="result__images">
//           <img className="result__image" src={a.images[0]} alt="estate"></img>
//         </div>
//       ) : (
//         ""
//       )}
//       <p className="result__name">{a.name}</p>
//       <div className="results__info">
//         <div
//           className={`results info-items  ${
//             aPriceLower ? "green" : "red"
//           }`}
//         >
//           <p className="results info-items title">Price: </p>
//           <p>{a.prize_czk} Kč</p>
//         </div>
//         <div className="results info-items info__locality">
//           <p className="results info-items title">Locality: </p>
//           <p>{a.locality}</p>
//         </div>
//         <div
//           className={`results info-items info__floor ${
//             aFloorSmaller ? "red" : "green"
//           }`}
//         >
//           <p className="results info-items title">Floor area: </p>
//           <p>
//             {a.building_area} m<sup>2</sup>
//           </p>
//         </div>
//         <div
//           className={`results info-items info__land ${
//             aLandSmaller ? "red" : "green"
//           }`}
//         >
//           <p className="results info-items title">Land area: </p>
//           <p>
//             {a.land_area}m<sup>2</sup>
//           </p>
//         </div>
//       </div>
//       <div className="results company">
//         {a.company_logo ? (
//           <img
//             src={a.company_logo}
//             alt="company logo"
//             className="results company__logo"
//           ></img>
//         ) : (
//           ""
//         )}
//         {a.company_name ? <p>{a.company_name}</p> : ""}
//       </div>
//     </div>
//   );
// }
