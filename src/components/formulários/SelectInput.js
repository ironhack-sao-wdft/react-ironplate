function SelectInput(props) {
    return (
      <div className="mb-3">
        <label htmlFor={props.id} className="form-label">
          {props.label}
        </label>
        <select
          className="form-select"
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
          multiple={props.multiple}
          required={props.required}
          readOnly={props.readOnly}
        >
          {props.items
            ? props.items.map((currentOptionStr) => (
                <option key={currentOptionStr} value={currentOptionStr}>
                  {currentOptionStr}
                </option>
              ))
            : props.children}
        </select>
      </div>
    );
  }
  
  export default SelectInput;