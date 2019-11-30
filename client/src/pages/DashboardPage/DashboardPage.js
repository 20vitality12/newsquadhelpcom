import React, {useState} from 'react';
import styles from './DashboardPage.module.sass';
import connect from 'react-redux/es/connect/connect';
import DashboardNavigation from "../../components/DashboardNavigation/DashboardNavigation";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import Dashboard from "../../components/Dashboard/Dashboard";
import { DASHBOARD } from "../../constants/links";

function DashboardPage(props) {
    const { user } = props;
    const [isActive, setActive] = useState(false);
    return(
        <div className={styles.dashboardPageContainer}>
            <DashboardNavigation currentPage={DASHBOARD} isActive={isActive}/>
            <div className={styles.pageContainer}>
                {user && <DashboardHeader isActive={isActive}  setActive={setActive} user={user}/>}
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