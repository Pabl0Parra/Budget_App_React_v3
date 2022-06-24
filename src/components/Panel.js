import PanelFragment, { PanelInputs } from "../styled";

export default function Panel(props) {
  return (
    <PanelFragment>
      Number of webpages:
      <PanelInputs
        type="text"
        onChange={(event) => props.addProduct(event.target)}
        id="pages"
        name="pages"
        value={props.budgetFormData["pages"]}
      />
      Number of languages:
      <PanelInputs
        type="text"
        id="languages"
        onChange={(event) => props.addProduct(event.target)}
        name="languages"
        value={props.budgetFormData["languages"]}
      />
    </PanelFragment>
  );
}
