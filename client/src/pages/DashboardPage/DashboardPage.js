import React from 'react';
import styles from './DashboardPage.module.sass';
import connect from 'react-redux/es/connect/connect';
import Header from "../../components/Header/Header";

function DashboardPage(props) {
    const { user } = props;
    console.log(user)
    return(
        <div className={styles.dashboardPageContainer}>
            <Header/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    //login: (dataToSend) => dispatch(login(dataToSend)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);