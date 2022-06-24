export default function Quantity(props) {
  function handleOnChange(variation) {
    props.addProduct({
      type: "text",
      name: props.id,
      value: parseInt(props.budgetFormData[props.id]) + variation,
    });
  }
  return (
    <div className="quantity">
      <button onClick={() => handleOnChange(1)}>+</button>
      <input
        type="text"
        onChange={(event) => props.addProduct(event.target)}
        id={props.id}
        name={props.id}
        value={props.budgetFormData[props.id]}
      />
      <button onClick={() => handleOnChange(-1)}>-</button>
    </div>
  );
}
