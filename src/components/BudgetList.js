export const BudgetList = (props) => {
  const List = props.budgetList.map((budget, i) => (
    <div className="budget-list" key={i}>
      <br />
      <p>Budget creation time: {budget.date}</p>
      <p>
        Budget name:
        {budget.budgetName}
      </p>
      <p>
        User name:
        {budget.userName}
      </p>
      <p>
        Chosen services:
        {budget.webSite &&
          `Website with: ${budget.pages} page(s) & ${budget.languages} language(s). `}
        {budget.seo && "SEO consultancy."}
        {budget.google && "Google Ads Campaign"}
      </p>

      <p>
        Total price:
        {budget.price}
      </p>
      <br />
    </div>
  ));

  return List;
};
