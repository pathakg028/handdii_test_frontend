import React from "react";

interface ButtonProps {
  title: String;
  style: any;
  type: String;
  action: any;
}
const Button = (props: ButtonProps): any => {
  //console.log(props.style);
  return (
    <button
      style={props.style}
      className={
        props.type === "primary" ? "btn btn-primary" : "btn btn-secondary"
      }
      onClick={props.action}
    >
      {props.title}
    </button>
  );
};

export default Button;
