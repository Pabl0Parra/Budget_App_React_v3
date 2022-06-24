import Quantity from "./Quantities";

function Panel(props) {
  return (
    <div className="panel">
      <div>
        Webpages:
        <Quantity
          id="pages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
      <div>
        Languages:
        <Quantity
          id="languages"
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      </div>
    </div>
  );
}

export default Panel;
