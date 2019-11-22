import React from 'react';
import styles from './DashboardPage.module.sass';
import connect from 'react-redux/es/connect/connect';
import DashboardNavigation from "../../components/DashboardNavigation/DashboardNavigation";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Dashboard from "../../components/Dashboard/Dashboard";

function DashboardPage(props) {
    const { user } = props;
    return(
        <div className={styles.dashboardPageContainer}>
            <DashboardNavigation/>
            <div className={styles.pageContainer}>
                {user && <DashboardHeader userName={user.displayName}/>}
                <Dashboard/>
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

});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);