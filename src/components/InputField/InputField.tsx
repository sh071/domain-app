import React from 'react';
import './InputField.scss';

const InputField = (props: any) => {
  const {name, ...rest} = props;
  
  return (
    <div className="input-field">
        <label>{props.label}</label>
        <input {...rest} />
    </div>
  );
}

export default InputField;
