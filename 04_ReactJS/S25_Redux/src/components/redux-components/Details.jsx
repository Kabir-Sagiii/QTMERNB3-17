import React from "react";
import { useSelector } from "react-redux";
function Details() {
  let reduxStoreData = useSelector((storeData) => {
    return storeData;
  });
  return (
    <div style={{ padding: "100px" }}>
      <h2>Details Component : {reduxStoreData}</h2>
    </div>
  );
}

export default Details;
