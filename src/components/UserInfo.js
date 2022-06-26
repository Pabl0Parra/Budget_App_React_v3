import { Fragment } from "react";
import "../styles/UserInfo.css";

export default function UserInfo() {
  return (
    <Fragment>
      <h4>Please, enter the following to create your budget:</h4>
      <div className="user-info">
        <input
          className="user-input"
          type="text"
          placeholder="Enter a budget ID"
        ></input>
        <input
          className="user-input"
          type="text"
          placeholder="Enter your name"
        ></input>
        <button className="user-btn">Create budget</button>
      </div>
    </Fragment>
  );
}
