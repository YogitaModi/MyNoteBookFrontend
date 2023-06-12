import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    if (word === "danger") {
      word = "Error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div>
      <div style={{ height: "70px" }}>
        {props.alert && (
          <div
            className={`alert alert-${props.alert.type} alert-dimissible-fade show`}
            role="alert"
          >
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
          </div>
        )}
      </div>
    </div>
  );
}
