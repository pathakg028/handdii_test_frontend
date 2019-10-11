import React from "react";

interface InputProps {
  inputtype: string;
  title: string;
  name: string;
  action: any;
  id: string;
  type: string;
  value: any;
  handleChange: any;
  placeholder: any;
}

const Input = (props: InputProps): any => {
  //console.log(props);
  return (
    <div className="form-group container">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputtype}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
