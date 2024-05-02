const Rubric = (props) => {
  const RubricItem = (props) => {
    return (
      <div className="rubricItem" id={props.correct ? "correct" : "notYet"}>
        <p>{props.item}</p>
      </div>
    );
  };

  const rubricItems = props.rubric.map((item, key) => {
    return (
      <RubricItem item={item} key={key} correct={props.scores.includes(key)} />
    );
  });

  return (
    <div className="rubricContainer">
      <h3>{props.title} </h3>
      {rubricItems}
    </div>
  );
};
export default Rubric;
