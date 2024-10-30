import { useRef } from "react";

function RefDom() {
  let h2Ref = useRef(null); //h2Ref = {current:null} // {curent:h2DomElement}
  let divRef = useRef(null);

  const changeStyle = () => {
    // var h2DomElement = document.querySelector("#mytitle");
    // h2DomElement.style.color = "red";

    var h2Dom = h2Ref.current;
    h2Dom.style.color = "blue";

    var divDom = divRef.current;
    divDom.style.border = "4px solid red";
    divDom.style.padding = "20px";
  };
  return (
    <div ref={divRef} style={{ padding: "100px" }}>
      <h2 ref={h2Ref} id="mytitle">
        DOM Manipulation with Ref
      </h2>
      <button onClick={changeStyle}>Change Style</button>
    </div>
  );
}

export default RefDom;
