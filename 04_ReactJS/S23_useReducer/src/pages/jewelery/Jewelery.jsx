import React from "react";
import AxiosDemo from "../../concepts/axios/AxiosDemo";
function Jewelery() {
  return (
    <div>
      <AxiosDemo
        url="http://localhost:3000/jewelery"
        mainTitle="Jewelery"
        bgImage="url(https://i.pinimg.com/originals/96/53/f6/9653f6102b68c96dd8f59808b3ceed9d.jpg)"
      />
    </div>
  );
}

export default Jewelery;
