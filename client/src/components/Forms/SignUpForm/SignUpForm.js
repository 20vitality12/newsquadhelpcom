import React from 'react';
import styles from './SignUpForm.module.sass';
import { BUYER, CREATIVE } from '../../../constants/userRoles'
import {Field, reduxForm} from 'redux-form';
import input from '../../CustomInputs/authInput';

function SignUpForm(props) {
    const { error, handleSubmit} = props;
    return(
        <div className={styles.signUpFormContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.fieldsContainer}>
                    <Field
                        name="firstName"
                        component={input}
                        type="text"
                        //validate={[sighUpValidate.required]}
                        label="First Name"
                    />
                    <Field
                        name="lastName"
                        component={input}
                        type="text"
                        //validate={[sighUpValidate.required]}
                        label="Last Name"
                    />
                    {error && <strong>{error}</strong>}
                </div>

                <div className={styles.fieldsContainer}>
                    <Field
                        name="displayName"
                        component={input}
                        type="text"
                        //validate={[sighUpValidate.required]}
                        label="Display Name"
                    />
                    <Field
                        name="email"
                        component={input}
                        type="text"
                        //validate={[sighUpValidate.required, sighUpValidate.email]}
                        label="Email Address"
                    />
                    {error && <strong>{error}</strong>}
                </div>

                <div className={styles.fieldsContainer}>
                    <Field
                        name="password"
                        component={input}
                        type="password"
                        //validate={[sighUpValidate.required]}
                        label="Password"
                    />
                    <Field
                        name="passwordConfirmation"
                        component={input}
                        type="password"
                        //validate={[sighUpValidate.required, sighUpValidate.matchPassword]}
                        label="Password Confirmation"
                    />
                    {error && <strong>{error}</strong>}
                </div>

                <div className={styles.joinAs}>
                    <label>
                        <Field  name='role' value={BUYER} type="radio" component={'input'}/>Join As a buyer
                        <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                    </label>

                </div>
                <div className={styles.joinAs}>
                    <label>
                        <Field name='role' value={CREATIVE} type="radio" component={'input'}/>Join As a Creative
                        <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                    </label>
                </div>

                <div className={styles.submitBtn}>
                    <button type="submit" >Create account</button>
                </div>
            </form>
        </div>
    );
}
//todo terms of services
//todo validation onSubmit && realtime
export default reduxForm({
    form: 'form'
})(SignUpForm);