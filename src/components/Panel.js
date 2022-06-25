import Quantity from "./Quantities";
import Popup from "./Popup";
import { useState } from "react";

function Panel(props) {
  const [showInfo1, setShowInfo1] = useState(false);

  return (
    <div className="panel">
      <div>
        Webpages:
        <Quantity
          id="pages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      <button onClick={() => setShowInfo1(true)}>Popup</button>
      <Popup
        show={showInfo1}
        onClickOutside={() => {
          setShowInfo1(false);
        }}
      >
        <h3>Please, enter the number of webpages you will need</h3>
      </Popup>
      <div>
        Languages:
        <Quantity
          id="languages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      <button onClick={() => setShowInfo1(true)}>Popup</button>
      <Popup
        show={showInfo1}
        onClickOutside={() => {
          setShowInfo1(false);
        }}
      >
        <h3>Please, enter the number of languages your site will need</h3>
      </Popup>
    </div>
  );
}

export default Panel;
