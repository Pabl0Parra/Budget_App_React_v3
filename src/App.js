import { useState } from "react";
import BudgetForm from "./components/BudgetForm";
import "./App.css";

function App() {
  const [budgetFormData, setBudgetFormData] = useState({
    webSite: false,
    seo: false,
    google: false,
    pages: 1,
    languages: 1,
  });

  const calculatedTotal =
    (budgetFormData.webSite ? 500 : 0) +
    (budgetFormData.seo ? 300 : 0) +
    (budgetFormData.google ? 200 : 0);

  function addProduct(id) {
    setBudgetFormData((prevFormData) => ({
      ...prevFormData,
      [id]: !prevFormData[id],
    }));
  }
  return (
    <div className="App">
      <h3> Which services do you require?</h3>
      <BudgetForm budgetFormData={budgetFormData} addProduct={addProduct} />
      <p>
        <strong>Total price: {calculatedTotal} €</strong>
      </p>
    </div>
  );
}
export default App;
