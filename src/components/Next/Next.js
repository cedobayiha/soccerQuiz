import React from "react";
import "./Next.css";

const Next = props => {
  return (
    <button
      onClick={() => {
        props.click();
        props.clicked();
      }}
    >
      NEXT
    </button>
  );
};

export default Next;
