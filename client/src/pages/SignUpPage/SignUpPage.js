import React from 'react';
import styles from "./SignUpPage.module.sass";
import connect from 'react-redux/es/connect/connect';
import Header from "../../components/Header/LoginAndSignUpHeader/Header";
import { LOGIN } from "../../constants/links";
import SignUpForm from "../../components/Forms/SignUpForm/SignUpForm";
import { signUp } from "../../actions/actionCreator";


function SignUpPage(props) {
    function submit(values) {
        const { firstName, lastName, displayName, email, password, passwordConfirmation, role } = values;
        const dataToSend = { firstName, lastName, displayName, email, password, passwordConfirmation, role };
        console.log(dataToSend)//todo remove line
        props.signUp(dataToSend);
    }

    return(
        <div className={styles.signUpPageContainer}>
            <div className={styles.signUpPage}>
                <Header href={LOGIN} title={'Login'}/>
                <h1 className={styles.pageTitle}>CREATE AN ACCOUNT</h1>
                <p className={styles.pageSubTitle}>We always keep your name and email address private.</p>
                <SignUpForm onSubmit={submit}/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => dispatch(signUp(user)),
});

export default connect(null, mapDispatchToProps)(SignUpPage);