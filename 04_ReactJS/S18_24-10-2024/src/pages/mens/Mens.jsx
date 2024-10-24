import React from "react";
import AxiosDemo from "../../concepts/axios/AxiosDemo";
function Mens() {
  return (
    <div>
      <AxiosDemo
        url="http://localhost:3000/mensclothing"
        mainTitle="MensClothing"
        bgImage="url(https://th.bing.com/th/id/OIP.C7PNEQEQFyW5rq-HyLnTLAHaEm?rs=1&pid=ImgDetMain)"
      />
    </div>
  );
}

export default Mens;
