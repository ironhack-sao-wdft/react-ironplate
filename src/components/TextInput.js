import React from "react";

function TextInput(props) {
  return (
    <div className="form-group ">
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        className={`form-control ${props.error ? "is-invalid" : ""}`}
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.error ? (
        <div className="invalid-feedback">{props.error}</div>
      ) : null}
    </div>
  );
}

export default TextInput;
