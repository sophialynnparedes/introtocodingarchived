import { Link } from "wouter";

const LinkButton = (props) => {
  if (props.image != null) {
    return (
      <Link href={props.href}>
        <button className="imageButton" id={props.id}>
          <img src={props.image} />
        </button>
      </Link>
    );
  } else {
    return (
      <Link href={props.href}>
        <button className={props.className} id={props.id}>
          <p>{props.label}</p>
        </button>
      </Link>
    );
  }
};
export default LinkButton;
