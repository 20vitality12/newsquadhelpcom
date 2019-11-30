import React, { useState } from 'react';
import styles from './Settings.module.sass';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import input from '../CustomInputs/authInput';

function Settings(props) {
    const { userData, handleSubmit, isActive, setIsActive } =  props;
    const { firstName, displayName, lastName } = userData;
    const [firstNameHook, setFirstNameHook] = useState(firstName);
    const [lastNameHook, setLastNameHook] = useState(lastName);
    const [displayNameHook, setDisplayNameHook] = useState(displayName);
    return(
        <div className={styles.settingsContainer}>
            <h2>Settings</h2>

            <form onSubmit={handleSubmit} className={styles.settingsCard}>
                <div className={styles.cardName}>
                    <p>NAME AND SCREEN NAME</p>
                    <span onClick={() => setIsActive(!isActive)}>EDIT</span>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.inputRow}>
                        <label >First Name</label>
                    </div>
                    <div className={styles.userData}>
                        {!isActive && <label>{ firstName }</label>}
                        {isActive &&
                        <Field
                            name={'firstName'}
                            component={input}
                            type={'text'}
                            label={'Name'}
                            defaultValue={firstNameHook}
                            handlerChange={e => setFirstNameHook(e.target.value)}
                        />
                        }
                    </div>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.inputRow}>
                        <label>Last Name</label>
                    </div>
                    <div className={styles.userData}>
                        {!isActive && <label>{ lastName }</label>}
                        {isActive &&
                        <Field
                            name={'lastName'}
                            component={input}
                            type={'text'}
                            label={'Last Name'}
                            defaultValue={lastNameHook}
                            handlerChange={e => setLastNameHook(e.target.value)}
                        />
                        }
                    </div>
                </div>
                <div className={styles.wrap}>
                    <div className={styles.inputRow}>
                        <label>Screen Name</label>
                    </div>
                    <div className={styles.userData}>
                        {!isActive && <label>{ displayName }</label>}
                        {isActive &&
                        <Field
                            name={'displayName'}
                            component={input}
                            type={'text'}
                            label={'Screen Name'}
                            defaultValue={displayNameHook}
                            handlerChange={e => setDisplayNameHook(e.target.value)}
                        />
                        }
                    </div>
                </div>
                {isActive &&
                    <button type={'submit'}>
                        <span>Update</span>
                    </button>
                }
            </form>

        </div>
    )
}


export default reduxForm({
    form: 'form',
})(Settings);