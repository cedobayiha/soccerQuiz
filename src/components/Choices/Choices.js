import React from "react";
import "./Choices.css";

const Choices = props => {
  return (
    <ul className="choices">
      <li className="choice" >
       <label>
        <input 
          onChange={props.handleClick}
          type="radio"
          name="choice"
          className=""
          data-order="{index}"
          id="choice{index}"
          checked={props.isSelected}
        />
        <span>{props.c}</span>
        </label>
      </li>
    </ul>
  );
};

export default Choices;
