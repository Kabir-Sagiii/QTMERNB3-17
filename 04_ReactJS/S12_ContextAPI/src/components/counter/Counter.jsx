// import "./Counter.css";
// import { useState } from "react";
// function Counter() {
//   let myContainer = useState(999); //myContainer = [state,setterFn]
//   var count = 0;

//   function incCount() {
//     count = count + 1;
//     console.log(count);

//     // myContainer[0] = myContainer[0] + 1;
//     // console.log(myContainer[0]);

//     myContainer[1](myContainer[0] + 1);
//   }

//   return (
//     <div className="counter">
//       <h2>Count Value is : {myContainer[0]}</h2>

//       <button onClick={incCount}>incCount</button>
//     </div>
//   );
// }

// export default Counter;

// import "./Counter.css";
// import { useState } from "react";
// function Counter() {
//   let arr = useState(0); //arr = [state,setter]

//   function incCount() {
//     arr[1](arr[0] + 1);
//   }

//   return (
//     <div className="counter">

//       <h2>Count Value is : {arr[0]}</h2>

//       <button onClick={incCount}>incCount</button>
//     </div>
//   );
// }

// export default Counter;

import "./Counter.css";
import { useState } from "react";
function Counter() {
  // let arr = useState(0); //arr = [state,setter]
  let [count, setCount] = useState(100);

  function incCount() {
    // arr[1](arr[0] + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  }

  return (
    <div className="counter">
      <h2>Count Value is : {count}</h2>

      <button onClick={incCount}>incCount</button>
    </div>
  );
}

export default Counter;
