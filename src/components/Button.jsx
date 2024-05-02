const Button = (props) => {
  if (props.image != null) {
    return (
      <button
        className="imageButton"
        onClick={props.method}
        id={props.id}
        disabled={props.disabled}>
        <img src={props.image} />
      </button>
    );
  } else {
    return (
      <button
        className={props.className}
        id={props.id}
        onClick={props.method}
        disabled={props.disabled}>
        <p>{props.label}</p>
      </button>
    );
  }
};
export default Button;
