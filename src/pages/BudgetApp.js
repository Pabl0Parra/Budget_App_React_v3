import { useState, useEffect, Fragment } from "react";
import NumberFormat from "react-number-format";
import BudgetForm from "../components/BudgetForm";
import "../styles/UserInfo.css";
import "../styles/BudgetApp.css";
import { BudgetList } from "../components/BudgetList";

function BudgetApp(props) {
  const [budgetList, setBudgetList] = useState([]);

  const [savedBudget, setSavedBudget] = useState();

  const [searchTitle, setSearchTitle] = useState("");

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

  function createUserBudget(totalCost) {
    setBudgetList((prevList) => [
      {
        ...budgetFormData,
        date: new Date().toUTCString(),
        price: totalCost,
      },
      ...prevList,
    ]);
    setSavedBudget(0);
  }

  function SortABC() {
    const byABCList = [...budgetList];
    byABCList.sort((a, b) =>
      a.budgetName.toLowerCase() > b.budgetName.toLowerCase() ? 1 : -1
    );

    setBudgetList(byABCList);
  }

  function SortByDate() {
    const byDateList = [...budgetList];
    byDateList.sort((a, b) =>
      a.date.toLowerCase() > b.date.toLowerCase() ? 1 : -1
    );

    setBudgetList(byDateList);
  }

  function Restart() {
    setBudgetList((prev) => (prev = budgetList));
  }
  // updating card´s order
  useEffect(() => {
    setBudgetList([...budgetList]);
  }, [budgetList]);

  // saving current choices into localStorage
  useEffect(() => {
    localStorage.setItem("budgetFormData", JSON.stringify(budgetFormData));
  }, [budgetFormData]);

  function SearchByTitle() {
    const byTitleList = [...budgetList];
    setBudgetList(
      (prev) =>
        (prev = byTitleList.filter((item) => item.budgetName === searchTitle))
    );
  }
  return (
    <div className="row grid">
      <div className="column create-budget">
        <h3> Which services do you require?</h3>
        <BudgetForm budgetFormData={budgetFormData} addProduct={addProduct} />
        <div className="price-section">
          <label htmlFor="NumberFormat">Total price:</label>

          {/* component to format number in an input  */}
          <NumberFormat
            className="budget-price"
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
        <div className="sorting-navbar">
          <button className="sorted-btn" onClick={SortABC}>
            Sort alphabetically
          </button>
          <button className="sorted-btn" onClick={SortByDate}>
            Sort by creation date
          </button>
          <button className="sorted-btn" onClick={Restart}>
            Restart sorting
          </button>
          <button className="sorted-btn" onClick={SearchByTitle}>
            Search Title
          </button>
          <div className="sorted-btn bg">
            <input
              type="text"
              placeholder="Enter Budget Name..."
              value={searchTitle}
              onChange={(event) => setSearchTitle(event.target.value)}
            ></input>
          </div>
        </div>
        <BudgetList budgetList={budgetList} />
      </div>
    </div>
  );
}

export default BudgetApp;
