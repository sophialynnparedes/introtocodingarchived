import Row from "../components/Row";
import Col from "../components/Col";

const Input = (props) => {
  return (
    <Row align="center">
      <Col align="right" width="40%">
        <label htmlFor={props.id}>{props.label}</label>
      </Col>
      <Col align="left" width="60%">
        <div className="inputContainer" style={{ width: "80%" }}>
          <input
            type={props.type}
            id={props.id}
            placeholder={props.placeholder}
            name={props.id}
            onChange={props.onChange}
          />
        </div>
      </Col>
    </Row>
  );
};
export default Input;
