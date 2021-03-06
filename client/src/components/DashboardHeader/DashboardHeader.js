import React from 'react';
import styles from './DashboardHeader.module.sass';
import {Link} from 'react-router-dom';
import {imagesURL} from '../../api/baseURL';
function DashboardHeader(props) {
    const { user, isActive, setActive } =  props;
    const filename = user.photo ? user.photo.filename : 'anonumous.png';

    return(
        <div className={styles.dashBoardHeaderContainer}>
            <div className={styles.dashBoardHeader}>
                <i onClick={() => {setActive(!isActive)}} className={'fas fa-bars'}/>
                <Link to={'/messages'}>
                    <i className="far fa-envelope"/>
                </Link>
                <div className={styles.userDetails}>
                    <img src={imagesURL +  filename} alt="userAvatar"/>
                    <p>{user.displayName}</p>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader;