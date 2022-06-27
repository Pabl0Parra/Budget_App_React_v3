import { useState } from "react";
import Quantity from "./Quantities";
import Popup from "./Popup";
// import info from "../assets/info.png";

function Panel(props) {
  const [showInfo, setShowInfo] = useState(false);

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
      <button className="info-btn" onClick={() => setShowInfo(true)}>
        <img className="info-icon" src="../assets/info.png" alt="" />
      </button>

      <Popup
        show={showInfo}
        onClickOutside={() => {
          setShowInfo(false);
        }}
      ></Popup>
      <div>
        Languages:
        <Quantity
          id="languages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      <button className="info-btn" onClick={() => setShowInfo(true)}>
        <img className="info-icon" src="../assets/info.png" alt="" />
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
