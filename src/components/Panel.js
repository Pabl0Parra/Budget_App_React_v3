import Quantity from "./Quantities";

function Panel(props) {
  return (
    <div className="panel">
      <div>
        Number of webpages:
        <Quantity
          id="pages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      Number of languages:{" "}
      <Quantity
        id="languages"
        budgetFormData={props.budgetFormData}
        addProduct={props.addProduct}
      />
    </div>
  );
}

export default Panel;
