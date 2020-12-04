import React from "react";

function SelectInput(props) {
  return (
    <div className="form-group">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        multiple={props.multiple}
        className="form-control"
        id={props.id}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      >
        {props.options.map((option) => (
          <option
            key={option.value ? option.value : option}
            value={option.value ? option.value : option}
          >
            {option.text ? option.text : option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectInput;
