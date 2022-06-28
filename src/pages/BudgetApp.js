import { useState, useEffect, Fragment } from "react";
import NumberFormat from "react-number-format";
import BudgetForm from "../components/BudgetForm";
import "../styles/UserInfo.css";

import "../styles/BudgetApp.css";
import { BudgetList } from "../components/BudgetList";

function BudgetApp(props) {
  const [budgetList, setBudgetList] = useState([]);

  const [savedBudget, setSavedBudget] = useState();

  const [budgetFormData, setBudgetFormData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("budgetFormData");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        webSite: false,
        seo: false,
        google: false,
        pages: 1,
        languages: 1,
        budgetName: "",
        userName: "",
      }
    );
  });

  const totalCost =
    (budgetFormData.webSite
      ? 500 + budgetFormData.languages * budgetFormData.pages * 30
      : 0) +
    (budgetFormData.seo ? 300 : 0) +
    (budgetFormData.google ? 200 : 0);

  function addProduct(data) {
    const { type, name, value } = data;

    if (type === "number" && value && !value.toString().match(/^0*[1-9]\d*$/))
      return;

    if (parseInt(value) < 1) return;

    setBudgetFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? !prevFormData[name] : value,
    }));
  }

  // saving current choices into localStorage
  useEffect(() => {
    localStorage.setItem("budgetFormData", JSON.stringify(budgetFormData));
  }, [budgetFormData]);

  function createUserBudget(totalCost) {
    setBudgetList((prevList) => [
      ...prevList,
      {
        ...budgetFormData,
        date: new Date().toUTCString(),
        price: totalCost,
      },
    ]);
    setSavedBudget(0);
  }
  console.log(budgetList);
  return (
    <div className="row grid">
      <div className="column create-budget">
        <h3> Which services do you require?</h3>
        <BudgetForm budgetFormData={budgetFormData} addProduct={addProduct} />
        <div className="price-section">
          <label htmlFor="NumberFormat">Total price:</label>

          {/* component to format number in an input  */}
          <NumberFormat
            id="NumberFormat"
            value={totalCost}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            renderText={(value, props) => <div {...props}>{value}</div>}
          />
        </div>
        <hr />
        <Fragment>
          <h4>Please, enter the following to create your budget:</h4>
          <div className="user-info">
            <input
              className="user-input"
              type="text"
              name="budgetName"
              placeholder="Enter a budget name"
              value={budgetFormData["userBudget"]}
              onChange={(event) => addProduct(event.target)}
            ></input>
            <input
              className="user-input"
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={budgetFormData["userName"]}
              onChange={(event) => addProduct(event.target)}
            ></input>
            <button
              className="user-btn"
              onClick={() => createUserBudget(totalCost)}
            >
              Create budget
            </button>
          </div>
        </Fragment>
      </div>
      <div className="column retrieve-budget">
        <BudgetList budgetList={budgetList} />
      </div>
    </div>
  );
}

export default BudgetApp;
