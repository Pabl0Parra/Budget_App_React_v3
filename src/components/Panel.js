import { useState } from "react";
import Quantity from "./Quantity";
import Popup from "./Popup";
import info from "../assets/info.png";

function Panel(props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="panel">
      <div>
        Number of webpages:
        <Quantity
          id="pages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      <button className="info-btn" onClick={() => setShowInfo(true)}>
        <img className="info-icon" src={info} alt="" />
      </button>

      <Popup
        show={showInfo}
        onClickOutside={() => {
          setShowInfo(false);
        }}
      ></Popup>
      <div>
        Number of languages:
        <Quantity
          id="languages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      <button className="info-btn" onClick={() => setShowInfo(true)}>
        <img className="info-icon" src={info} alt="" />
      </button>
      <Popup
        show={showInfo}
        onClickOutside={() => {
          setShowInfo(false);
        }}
      ></Popup>
    </div>
  );
}

export default Panel;
