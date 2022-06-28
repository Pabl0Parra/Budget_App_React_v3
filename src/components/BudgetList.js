import "../styles/BudgetCard.css";
import NumberFormat from "react-number-format";

export const BudgetList = (props) => {
  const Card = props.budgetList.map((budget, i) => (
    <div className="budget-list card-wrapper" key={i}>
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
              id="NumberFormat"
              value={budget.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
              renderText={(value, props) => <div {...props}>{value}</div>}
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

  return Card;
};
