export default function Quantity(props) {
  function changeInput(arithmeticOp) {
    props.addProduct({
      type: "text",
      name: props.id,
      value: parseInt(props.budgetFormData[props.id]) + arithmeticOp,
    });
  }
  return (
    <div className="quantity">
      <button onClick={() => changeInput(1)}>+</button>
      <input
        type="text"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.budgetFormData[props.id]}
      />
      <button onClick={() => changeInput(-1)}>-</button>
    </div>
  );
}
