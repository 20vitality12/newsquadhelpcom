import React from 'react';
import styles from './DashboardHeader.module.sass';
import {Link} from 'react-router-dom';

function DashboardHeader(props) {
    const { userName } =  props;
    return(
        <div className={styles.dashBoardHeaderContainer}>
            <div className={styles.dashBoardHeader}>
                <i className={'fas fa-bars'}/>
                <Link to={'/messages'}>
                    <i className="far fa-envelope"/>
                </Link>
                <div className={styles.userDetails}>
                    <img src="https://www.squadhelp.com/assets/nimages/compressed/anonumous-min.png" alt="userAvatar"/>
                    <p>{userName}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;