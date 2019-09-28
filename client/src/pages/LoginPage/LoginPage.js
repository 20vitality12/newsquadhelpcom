import React from 'react';
import styles from './LoginPage.module.sass';
import { SIGN_UP } from '../../constants/links';
import { login } from "../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';
import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import Header from "../../components/Header/LoginAndSignUpHeader/Header";

function LoginPage(props) {
    function submit (values){
        const { email, password } = values;
        const dataToSend = { email, password };
        console.log(dataToSend)//TODO remove line
        props.login(dataToSend);
    }
    return(
        <div className={styles.loginPageContainer}>
            <div className={styles.loginPage}>
                <Header href={SIGN_UP} title={'SignUp'}/>
                <h1 className={styles.pageTitle}>LOGIN TO YOUR ACCOUNT</h1>
                <LoginForm onSubmit={submit}/>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    login: (dataToSend) => dispatch(login(dataToSend)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);