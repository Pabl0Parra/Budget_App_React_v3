import Quantity from "./Quantities";
import Popup from "./Popup";
import { useState } from "react";

function Panel(props) {
  const [buttonPopup, setButtonPopup] = useState(false);

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
      <button onClick={() => setButtonPopup(true)}>Popup</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
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
      <button onClick={() => setButtonPopup(true)}>Popup</button>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>Please, enter the number of languages your site will need</h3>
      </Popup>
    </div>
  );
}

export default Panel;
