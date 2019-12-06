import React, { useState } from 'react';
import styles from './ChangePassword.module.sass';
import {Field, reduxForm} from 'redux-form';
import input from '../CustomInputs/authInput';

function ChangePassword(props) {
    const { handleSubmit } =  props;
    const [passwordHook, setPasswordHook] = useState('');
    const [newPasswordHook, setNewPasswordHook] = useState('');
    const [newPasswordRepeatHook, setNewPasswordRepeatHook] = useState('');

    return(
        <form onSubmit={handleSubmit} className={styles.changePasswordCard}>
            <div className={styles.cardName}>
                <p>CHANGE PASSWORD</p>
            </div>
            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label >Existing Password</label>
                </div>
                <div className={styles.userData}>
                    <Field
                        name={'password'}
                        component={input}
                        type={'password'}
                        defaultValue={passwordHook}
                        handlerChange={e => setPasswordHook(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Enter a new password</label>
                </div>
                <div className={styles.userData}>
                    <Field
                        name={'newPassword'}
                        component={input}
                        type={'password'}
                        defaultValue={newPasswordHook}
                        handlerChange={e => setNewPasswordHook(e.target.value)}
                    />
                </div>
            </div>
            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Confirm new password</label>
                </div>
                <div className={styles.userData}>
                    <Field
                        name={'newPasswordRepeat'}
                        component={input}
                        type={'password'}
                        defaultValue={newPasswordRepeatHook}
                        handlerChange={e => setNewPasswordRepeatHook(e.target.value)}
                    />
                </div>
            </div>
            <button type={'submit'} onClick={ () => {
                setPasswordHook('');
                setNewPasswordHook('')
                setNewPasswordRepeatHook('')
            }}>
                <span>Update</span>
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'form',
})(ChangePassword);