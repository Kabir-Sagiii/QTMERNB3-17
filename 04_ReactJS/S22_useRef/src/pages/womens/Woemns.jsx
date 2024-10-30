import React from "react";
import AxiosDemo from "../../concepts/axios/AxiosDemo";
function Woemns() {
  return (
    <div>
      <AxiosDemo
        url="http://localhost:3000/womensclothing"
        mainTitle="WomensClothing"
        bgImage="url(https://th.bing.com/th/id/OIP.AgUW74LvQfZrucfNj7fzIgHaE8?rs=1&pid=ImgDetMain)"
      />
    </div>
  );
}

export default Woemns;
