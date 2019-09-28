import React from 'react';
import styles from "../Forms/LoginForm/LoginForm.module.sass";

const customInput = ({ input, label, type, meta: { touched, error } }) => (
    <div >
        <input {...input} placeholder={label} type={type} />
        {touched && error && <div className={styles.error}>{error}</div>}
    </div>
);

export default customInput;