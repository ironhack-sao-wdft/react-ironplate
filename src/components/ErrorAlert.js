function ErrorAlert(props) {
  return (
    <div class="alert alert-danger" role="alert">
      {props.children}
    </div>
  );
}

export default ErrorAlert;
