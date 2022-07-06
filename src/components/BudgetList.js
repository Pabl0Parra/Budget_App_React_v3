import "../styles/BudgetList.css";
import NumberFormat from "react-number-format";

export const BudgetList = (props) => {
  return props.budgetList.map((budget, i) => (
    <div className="budget-list card" key={i}>
      <div className="card-title">
        <span>Budget title: {budget.budgetName}</span>
        <div className="card-name">
          <span>User Name: {budget.userName}</span>
        </div>
        <hr></hr>
        <div className="card-description">
          <span>
            ·{" "}
            {budget.webSite &&
              `Website with: ${budget.pages} page(s) & ${budget.languages} language(s). `}
          </span>
          <br></br>
          <span>· {budget.seo && "SEO consultancy."}</span>
          <br></br>
          <span>· {budget.google && "Google Ads Campaign"}</span>
        </div>
        <hr></hr>
        <div className="card-price">
          <span>
            Total price =
            <NumberFormat
              className="budgetList-price"
              id="NumberFormat"
              value={budget.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value, money) => <div {...money}>{value}</div>}
            />
          </span>
          <hr></hr>
        </div>
        <div className="card-date">
          <span>{budget.date}</span>
        </div>
      </div>
    </div>
  ));
};
