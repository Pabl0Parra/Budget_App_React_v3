import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import BudgetForm from "../components/BudgetForm";
import UserInfo from "../components/UserInfo";
import "../styles/BudgetApp.css";

function BudgetApp(props) {
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

    if (type !== "checkbox" && value && !value.toString().match(/^0*[1-9]\d*$/))
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

  return (
    <div className="row grid">
      <div className="column create-budget">
        <h3> Which services do you require?</h3>
        <BudgetForm
          className="test"
          budgetFormData={budgetFormData}
          addProduct={addProduct}
        />
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
        <UserInfo />
      </div>
      <div className="column retrieve-budget">
        <h1>TESTING TEMPLATE</h1>
      </div>
    </div>
  );
}

export default BudgetApp;
