import { useState, useEffect } from "react";
import { BudgetList } from "./BudgetList";
import "../styles/BudgetApp.css";

export default function SortedBudgetsNav({ budgetFormData }) {
  const [sortState, setSortState] = useState([]);

  function SortABC() {
    let newSortedList = [...sortState];
    newSortedList.sort((a, b) =>
      a.budgetName.toLowerCase() > b.budgetName.toLowerCase() ? 1 : -1
    );

    setSortState(newSortedList);
  }

  useEffect(() => {
    setSortState([...budgetFormData]);
  }, [budgetFormData]);

  function SortByDate() {
    let newBudgetList = [...sortState];
    newBudgetList.sort((a, b) =>
      a.date.toLowerCase() > b.date.toLowerCase() ? 1 : -1
    );

    setSortState(newBudgetList);
  }

  function ReStart() {
    setSortState((prev) => (prev = budgetFormData));
  }

  return (
    <div className="card-wrapper">
      <div className="sort-navbar">
        <div className="sort-btn">
          <button className="sorted-btn" onClick={SortABC}>
            Sort from A to Z
          </button>
          <button className="sorted-btn" onClick={SortByDate}>
            Sort by date
          </button>
          <button className="sorted-btn" onClick={ReStart}>
            Restart sorting
          </button>
        </div>
      </div>
      {sortState.map((item, index) => {
        return (
          <BudgetList
            clientName={item.userName}
            budgetName={item.budgetName}
            totalPrice={item.totalCost}
            date={item.date}
            key={index}
          />
        );
      })}
    </div>
  );
}
