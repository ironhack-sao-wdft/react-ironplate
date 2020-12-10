import React from "react";

function FileInput(props) {
  return (
    <div className="form-group">
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
        />
        <label className="custom-file-label" htmlFor={props.id}>
          {props.label}
        </label>
      </div>
    </div>
  );
}

export default FileInput;
