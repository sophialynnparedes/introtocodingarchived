const ProgressBar = (props) => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 50,
    width: "90%",
    backgroundColor: "#e0e0de",
    borderRadius: 0,
    border: "3px solid black",
    position: "relative",
    textAlign: "left",
  };

  const fillerStyles = {
    height: 50,
    width: `${completed}%`,
    backgroundColor: bgcolor,
    filter: "hue-rotate(" + 2 * completed + "deg)",
    borderRadius: "inherit",
    transition: "1s ease",
    transitionDelay: "0.5s",
  };

  const labelStyles = {
    color: "white",
    width: "100%",
    fontSize: 36,
    fontWeight: "bold",
    position: "absolute",
    fontFamily: "VT323, monospace",
    top: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const TitleStyle = {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "VT323, monospace",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}></div>
      <span style={labelStyles}>
        <h2 style={TitleStyle}>{props.title}</h2>
        {`${completed}%`}
      </span>
    </div>
  );
};

export default ProgressBar;
