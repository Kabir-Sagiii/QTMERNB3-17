import React from "react";
import { useSelector } from "react-redux";
function Details() {
  let reduxStoreData = useSelector((storeData) => {
    return storeData;
  });
  return <div>{<h2>Details Component : {reduxStoreData.myReducer}</h2>}</div>;
}

export default Details;
