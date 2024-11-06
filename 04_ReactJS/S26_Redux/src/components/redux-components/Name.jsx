import { useRef } from "react";
import nameActionCreator from "../../actioncreator/nameAction";
import store from "../../store/Store";
function Name() {
  const inputRef = useRef(null); // {current:null}

  const getInputData = () => {
    var inputDomElement = inputRef.current;
    var inputValue = inputDomElement.value;

    var actionObj = nameActionCreator(inputValue);
    store.dispatch(actionObj);

    //  store.dispatch(nameActionCreator(inputRef.current.value))
  };

  return (
    <div>
      <h2>Name Component</h2>
      <br />
      <input ref={inputRef} type="text" placeholder="enter username" />
      <button onClick={getInputData}>Submit</button>
    </div>
  );
}

export default Name;
