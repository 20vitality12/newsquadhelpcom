import React from 'react';
import styles from './Dashboard.module.sass';
import {Link} from 'react-router-dom';

function Dashboard(props) {
    const { text, href } =  props;
    return(
        <div className={styles.dashboardContainer}>
            <h2>Dashboard</h2>


        </div>
    )
}

export default Dashboard;