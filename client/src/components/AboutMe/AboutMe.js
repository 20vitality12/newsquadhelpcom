import React, { useState } from 'react';
import styles from './AboutMe.module.sass';
import {Link} from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import input from '../CustomInputs/authInput';
import renderTextArea from "../CustomInputs/textarea";

function AboutMe(props) {

    const { userData, handleSubmit, isActive, setIsActive } =  props;
    const { interests, motivation, address, city, stateOrProvince, pin, country, phone, linkedIn , twitter, id} = userData;
    const [interestsHook, setInterestsHook] = useState(interests);
    const [motivationHook, setMotivationHook] = useState(motivation);
    const [addressHook, setAddressHook] = useState(address);
    const [cityHook, setCityHook] = useState(city);
    const [stateOrProvinceHook, setStateOrProvinceHook] = useState(stateOrProvince);
    const [pinHook, setPinHook] = useState(pin);
    const [countryHook, setCountryHook] = useState(country);
    const [phoneHook, setPhoneHook] = useState(phone);
    const [linkedInHook, setLinkedInHook] = useState(linkedIn);
    const [twitterHook, setTwitterHook] = useState(twitter);

    return(
        <form onSubmit={handleSubmit} className={styles.aboutCard}>
            <div className={styles.cardName}>
                <p>ABOUT ME</p>
                <span onClick={() => setIsActive(!isActive)}>EDIT</span>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Bio/ My Interests</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ interests }</label>}
                    {isActive &&
                    <Field
                        name={'interests'}
                        component={renderTextArea}
                        defaultValue={interestsHook}
                        handlerChange={e => setInterestsHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Why do I like to use Squadhelp?</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ motivation }</label>}
                    {isActive &&
                    <Field
                    name={'motivation'}
                    component={renderTextArea}
                    defaultValue={motivationHook}
                    handlerChange={e => setMotivationHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.cardName}>
                <p>CONTACT INFORMATION</p>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Address 1</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ address }</label>}
                    {isActive &&
                    <Field
                        name={'address'}
                        component={input}
                        type={'text'}
                        label={'Address 1'}
                        defaultValue={addressHook}
                        handlerChange={e => setAddressHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>City</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ city }</label>}
                    {isActive &&
                    <Field
                        name={'city'}
                        component={input}
                        type={'text'}
                        label={'City'}
                        defaultValue={cityHook}
                        handlerChange={e => setCityHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>State / Province</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ stateOrProvince }</label>}
                    {isActive &&
                    <Field
                        name={'stateOrProvince'}
                        component={input}
                        type={'text'}
                        label={'State'}
                        defaultValue={stateOrProvinceHook}
                        handlerChange={e => setStateOrProvinceHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Pin code / Zip code</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ pin }</label>}
                    {isActive &&
                    <Field
                        name={'pin'}
                        component={input}
                        type={'text'}
                        label={'Zip code'}
                        defaultValue={pinHook}
                        handlerChange={e => setPinHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Country</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ country }</label>}
                    {isActive &&
                    <Field
                        name={'country'}
                        component={input}
                        type={'text'}
                        label={'Country'}
                        defaultValue={countryHook}
                        handlerChange={e => setCountryHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Phone</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ phone }</label>}
                    {isActive &&
                    <Field
                        name={'phone'}
                        component={input}
                        type={'text'}
                        label={'Phone No'}
                        defaultValue={phoneHook}
                        handlerChange={e => setPhoneHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>My User ID:</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ id }</label>}
                    {isActive && <label>{ id }</label> }
                </div>
            </div>

            <div className={styles.cardName}>
                <p>SOCIAL PROFILES</p>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>LinkedIn Url</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ linkedIn }</label>}
                    {isActive &&
                    <Field
                        name={'linkedIn'}
                        component={input}
                        type={'text'}
                        label={'LinkedIn Url'}
                        defaultValue={linkedInHook}
                        handlerChange={e => setLinkedInHook(e.target.value)}
                    />}
                </div>
            </div>

            <div className={styles.wrap}>
                <div className={styles.inputRow}>
                    <label>Twitter Handle</label>
                </div>
                <div className={styles.userData}>
                    {!isActive && <label>{ twitter }</label>}
                    {isActive &&
                    <Field
                        name={'twitter'}
                        component={input}
                        type={'text'}
                        label={'Twitter Url'}
                        defaultValue={twitterHook}
                        handlerChange={e => setTwitterHook(e.target.value)}
                    />}
                </div>
            </div>
            <p>test</p>
            {isActive &&
            <button type={'submit'}>
                <span>Update</span>
            </button>
            }
        </form>
    )
}


export default reduxForm({
    form: 'form',
})(AboutMe);