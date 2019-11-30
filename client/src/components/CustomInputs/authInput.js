import React from 'react';
import styles from "../Forms/LoginForm/LoginForm.module.sass";

const customInput = ({ input, test ,label, defaultValue, handlerChange, type, id, meta: { touched, error } }) => (
    <div>
        <input {...input}  placeholder={label} value={defaultValue} onChange={handlerChange} id={id} type={type} ref={test}/>
        {touched && error && <div className={styles.error}>{error}</div>}
    </div>
);


export default customInput;