import { useState, useEffect, Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import NumberFormat from "react-number-format";
import BudgetForm from "../components/BudgetForm";
import { BudgetList } from "../components/BudgetList";
import "../styles/UserInfo.css";
import "../styles/BudgetApp.css";

function BudgetApp() {
  const [budgetList, setBudgetList] = useState(() => {
    const initialValue = [];

    try {
      const item = localStorage.getItem("budgetList");
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    localStorage.setItem("budgetList", JSON.stringify(budgetList));
  }, [budgetList]);

  const [savedBudget, setSavedBudget] = useState();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchTitle, setSearchTitle] = useState("");

  const [budgetFormData, setBudgetFormData] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("budgetFormData");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        webSite: searchParams.get("webSite") === "true" ? true : false,
        seo: searchParams.get("seo") === "true" ? true : false,
        google: searchParams.get("google") === "true" ? true : false,
        pages: searchParams.get("pages") ? searchParams.get("pages") : 1,
        languages: searchParams.get("languages")
          ? searchParams.get("languages")
          : 1,
        budgetName: searchParams.get("budgetName")
          ? searchParams.get("budgetName")
          : "",
        userName: searchParams.get("userName")
          ? searchParams.get("userName")
          : "",
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

  function createUserBudget() {
    if (budgetFormData.budgetName === "" || budgetFormData.userName === "") {
      return;
    }
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
    const byDateList = [...budgetList];
    byDateList.sort((a, b) =>
      a.date.toLowerCase() < b.date.toLowerCase() ? -1 : 1
    );

    setBudgetList(byDateList);
  }

  function SearchByTitle() {
    const byTitleList = [...budgetList];

    if (searchTitle !== "") {
      setBudgetList(() =>
        byTitleList.filter(
          (item) =>
            item.budgetName.toLowerCase() === searchTitle.toLocaleLowerCase()
        )
      );
    } else {
      if (searchTitle === "") alert("Please enter a budget title");
    }
  }

  useEffect(() => {
    // saving current form choices into localStorage
    localStorage.setItem("budgetFormData", JSON.stringify(budgetFormData));
    // saving actual budgets into localStorage
    localStorage.setItem("budgetList", JSON.stringify(budgetList));
  }, [budgetFormData, budgetList]);

  useEffect(() => {
    // setting current form selections into url
    setSearchParams(budgetFormData);
  }, [budgetFormData, setSearchParams]);

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
            <button className="user-btn" onClick={() => createUserBudget()}>
              Create budget
            </button>
          </div>
        </Fragment>
      </div>
      <div className="column retrieve-budget">
        <div className="sorting-navbar">
          <button className="sorted-btn" onClick={SortABC}>
            Sort ABC
          </button>
          <button className="sorted-btn" onClick={SortByDate}>
            Sort by date
          </button>
          <button className="sorted-btn" onClick={Restart}>
            Restart sorting
          </button>
          <button className="sorted-btn" onClick={SearchByTitle}>
            Search title
          </button>
          <div className="sorted-btn bg">
            <input
              name="searchTitleName"
              className="search"
              type="text"
              placeholder="Enter Budget Title..."
              value={searchTitle}
              onChange={(event) => setSearchTitle(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="card-wrapper">
          <BudgetList budgetList={budgetList} />
        </div>
      </div>
    </div>
  );
}

export default BudgetApp;
