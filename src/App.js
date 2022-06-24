import { useState, useEffect } from "react";
import BudgetForm from "./components/BudgetForm";
import "./App.css";

function App() {
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

  // saving current choices into localStorage

  function addProduct(data) {
    const { type, name, value } = data;

    if (type !== "checkbox" && value && !value.toString().match(/^[0-9 ]+$/))
      return;

    if (parseInt(value) < 0) return;

    setBudgetFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? !prevFormData[name] : value,
    }));
  }

  useEffect(() => {
    localStorage.setItem("budgetFormData", JSON.stringify(budgetFormData));
  }, [budgetFormData]);

  return (
    <div className="App">
      <h3> Which services do you require?</h3>
      <BudgetForm budgetFormData={budgetFormData} addProduct={addProduct} />
      <p>
        <strong>Total price: {totalCost} €</strong>
      </p>
    </div>
  );
}
export default App;
