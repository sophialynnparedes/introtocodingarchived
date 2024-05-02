const Check = (props) => {
  return (
    <div className="check" id={props.correct ? "correct" : "incorrect"}>
      <p>{props.correct ? props.right : props.wrong}</p>
    </div>
  );
};
export default Check;
