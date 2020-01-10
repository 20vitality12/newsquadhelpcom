import React, { useState } from 'react';
import styles from '../HeaderTop.module.sass';
//import {LOGIN, SIGN_UP} from "../../../../constants/links";
import { Link } from 'react-router-dom';
import NavigationList from "./NavigationList/NavigationList";
import {imagesURL} from "../../../../api/baseURL";

function LoggedHeader(props) {
    const { user } = props;
    const filename = user.filename ? user.filename : 'anonumous.png';
    const [isActiveUserNav, setIsActiveUserNav] = useState(false);
    const [isActiveNav, setIsActiveNav] = useState(false);
    return(
        <>
            <div className={styles.phoneContainer}>
                <Link to={'/'}>
                    <i className="fas fa-phone-alt"/>
                    (877) 355-3855
                </Link>
            </div>
            <div onClick={ () => {setIsActiveUserNav(!isActiveUserNav); setIsActiveNav(false)}} className={styles.navContainer}>
                <img src={imagesURL +  filename} alt="userAvatar"/>
                <span>{user.displayName}</span>
                {isActiveUserNav ? <i  className="fa fa-angle-up"/> : <i  className="fa fa-angle-down"/>}
                <Link className={styles.messageIcon} to={'/messages'}>
                    <i className="far fa-envelope"/>
                </Link>
                { isActiveUserNav && <NavigationList userRole={user.role}/>}
            </div>
        </>
    )
}

export default LoggedHeader;