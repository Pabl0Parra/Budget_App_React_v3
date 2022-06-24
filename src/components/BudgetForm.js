import { Fragment } from "react";
import Checkbox from "./Checkboxes";
import Panel from "./Panel";

export default function BudgetForm(props) {
  return (
    // component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.
    <Fragment>
      <Checkbox
        budgetFormData={props.budgetFormData}
        addProduct={props.addProduct}
        id="webSite"
        label="A website (500 €)"
      />
      {props.budgetFormData["webSite"] && (
        <Panel
          budgetFormData={props.budgetFormData}
          addProduct={props.addProduct}
        />
      )}

      <Checkbox
        budgetFormData={props.budgetFormData}
        addProduct={props.addProduct}
        id="seo"
        label="A SEO consultancy (300 €)"
      />

      <Checkbox
        budgetFormData={props.budgetFormData}
        addProduct={props.addProduct}
        id="google"
        label="A Google Ads campaign (200 €)"
      />
    </Fragment>
  );
}
