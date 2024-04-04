import React from "react";

const CheckboxComponent = (props) => {
  
  return (
    <div id={"checkbox_" + props.id} className={props.class}>
      <input
        type={props.type}
        id={props.id}
        name={props.name}
        value={props.name}
        className={props.class + " " + "Input"}
        checked={props.checked}
        onChange={props.onChange}
      />
      <label for={props.title}>{props.name}</label>
    </div>
  );
};

export default CheckboxComponent;
