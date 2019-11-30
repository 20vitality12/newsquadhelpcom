import React from 'react';

const renderTextArea = ({input, label, defaultValue, handlerChange, meta: { touched, error, warning }}) => (
    <textarea {...input} placeholder={label} value={defaultValue} onChange={handlerChange} />
);

export default renderTextArea;