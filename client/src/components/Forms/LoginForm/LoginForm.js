import React from 'react';
import styles from './LoginForm.module.sass';
import { Field, reduxForm } from 'redux-form';
//import {Link} from "react-router-dom";
import input from '../../CustomInputs/authInput';

//TODO FUCKING VALIDATION && email already in use
function LoginForm(props) {
    const { error, handleSubmit } = props;
    return(
        <div className={styles.loginFormContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.fieldsContainer}>
                    <Field
                        name="email"
                        component={input}
                        type="text"
                        label="Email"
                    />
                    <Field
                        name="password"
                        //validate={loginValidate.required}
                        component={input}
                        type="password"
                        label="Password"
                    />
                    {error && <strong>{error}</strong>}
                </div>
                <div className={styles.submitBtn}>
                    <button type="submit" >Login</button>
                </div>
            </form>
        </div>

    );
}

export default reduxForm({
    form: 'form',
})(LoginForm);

