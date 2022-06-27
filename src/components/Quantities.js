export default function Quantity(props) {
  function handleOnChange(variation) {
    const quantity = parseInt(props.budgetFormData[props.id]) + variation;
    props.addProduct({
      type: "text",
      name: props.id,
      value: isNaN(quantity) ? 1 : quantity,
    });
  }
  return (
    <div className="quantity">
      <button onClick={() => handleOnChange(1)}>+</button>
      <input
        type="number"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.budgetFormData[props.id]}
      />
      <button onClick={() => handleOnChange(-1)}>-</button>
    </div>
  );
}
