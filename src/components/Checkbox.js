export default function Checkbox(props) {
  return (
    <div className="check">
      <input
        className="check"
        type="checkbox"
        id={props.id}
        name={props.id}
        checked={props.budgetFormData[props.id]}
        onChange={(event) => props.addProduct(event.target)}
      />
      <label htmlFor={props.id}>{props.label}</label>
    </div>
  );
}
