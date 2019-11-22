import React from 'react';
import styles from './DashboardNavigation.module.sass';
import { Link } from 'react-router-dom';

function DashboardNavigation(props) {
    return(
        <div className={styles.dashboardNavigationContainer}>
            <Link to={'/'}>
                <img src="https://www.squadhelp.com/img/SquadHelpSquareWhiteTransparentSmall.png" alt="logo"/>
            </Link>
        </div>
    )
}

export default DashboardNavigation;