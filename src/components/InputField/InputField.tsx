import React from 'react';
import './InputField.scss';

const InputField = (props: any) => {
  return (
    <div className="input-field">
        <label>{props.label}</label>
        <input name={props.name} type={props.type} />
    </div>
  );
}

export default InputField;
