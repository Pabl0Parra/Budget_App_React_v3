import { Fragment } from "react";
import "../styles/UserInfo.css";
import { saveBudget } from "../pages/BudgetApp";

export default function UserInfo(props) {
  return (
    <Fragment>
      <h4>Please, enter the following to create your budget:</h4>
      <div className="user-info">
        <input
          className="user-input"
          value={props.budgetFormData["budgetName"]}
          onChange={(event) => props.addProduct(event.target)}
          type="text"
          name="budgetName"
          placeholder="Enter a name for your budget"
        ></input>

        <input
          className="user-input"
          value={props.budgetFormData["name"]}
          onChange={(event) => props.addProduct(event.target)}
          type="text"
          name="userName"
          placeholder="Enter your name"
        ></input>
        <button
          className="user-btn"
          onClick={() =>
            saveBudget({
              ...props.budgetFormData,
              total: props.totalCost,
            })
          }
        >
          Create budget
        </button>
      </div>
    </Fragment>
  );
}
