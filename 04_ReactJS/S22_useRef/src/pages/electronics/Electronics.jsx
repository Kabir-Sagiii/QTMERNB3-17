import React from "react";
import AxiosDemo from "../../concepts/axios/AxiosDemo";

function Electronics() {
  return (
    <div>
      <AxiosDemo
        url="http://localhost:3000/electronics"
        mainTitle="Electronics"
        bgImage={
          "url(https://thumbs.dreamstime.com/b/collection-consumer-electronics-d-render-blue-collection-consumer-electronics-d-render-blue-background-103463140.jpg)"
        }
      />
    </div>
  );
}

export default Electronics;
