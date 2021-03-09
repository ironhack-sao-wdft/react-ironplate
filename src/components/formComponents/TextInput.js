function TextInput(props) {
    return (
      <div className="form-group">
        <label htmlFor={props.id}>{props.label}</label>
        <input
          type={props.type}
          className={`form-control ${props.error ? "is-invalid" : ""} ${
            props.done ? "is-valid" : ""
          }`}
          id={props.id}
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
        {props.hint ? (
          <small className="form-text text-muted">{props.hint}</small>
        ) : null}
  
        {props.error ? (
          <small className="form-text invalid-feedback">{props.error}</small>
        ) : null}
      </div>
    );
  }
  
  export default TextInput;