import Col from "./Col";

const Page = (props) => {
  return (
    <Col width="100%" align="center">
      <Col width="95%" align="center">
        {props.children}
      </Col>
    </Col>
  );
};
export default Page;
