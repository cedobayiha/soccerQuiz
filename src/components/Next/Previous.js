import React from "react";
import "./Next.css";

const Previous = props => {
  return (
    <button
      onClick={() => {
        props.click();
        props.clicked();
      }}
    >
      PREVIOUS
    </button>
  );
};

export default Previous;
