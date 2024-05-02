import Row from "./Row";
import LinkButton from "./LinkButton";
import Button from "../components/Button";

const Navigate = (props) => {
  function handleClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    props.changeBack();
  }

  function handleClickNext() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    props.changeForward();
  }

  return (
    <>
      <Row align="left">
        {props.page == 0 ? (
          <LinkButton className="button" label="Back to Home" href="/" />
        ) : (
          <Button
            label="Prev Page"
            className="button"
            method={() => {
              handleClick();
            }}
          />
        )}
      </Row>
      {props.children}
      <Row align="right">
        {props.page < props.agendaItems.length - 1 ? (
          <Button
            className="button"
            label="Next Page"
            method={() => {
              handleClickNext();
            }}
          />
        ) : (
          <LinkButton className="button" label="Back to Home" href="/" />
        )}
      </Row>
    </>
  );
};
export default Navigate;
