import React from 'react';
import './InputField.scss';

const InputField = (props: any) => {
  const {label, ...rest} = props;

  return (
    <div className="input-field">
        <label>{label}</label>
        <input {...rest} />
    </div>
  );
}

export default InputField;
