import React, { useState } from 'react';
import styles from '../HeaderTop.module.sass';
//import {LOGIN, SIGN_UP} from "../../../../constants/links";
import { Link } from 'react-router-dom';
import NavigationList from "./NavigationList/NavigationList";

function LoggedHeader(props) {
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
                <img src="https://www.squadhelp.com/assets/nimages/compressed/anonumous-min.png" alt="header-avatar"/>
                <span>{props.userName}</span>
                {isActiveUserNav ? <i  className="fa fa-angle-up"/> : <i  className="fa fa-angle-down"/>}
                <Link className={styles.messageIcon} to={'/messages'}>
                    <i className="far fa-envelope"/>
                </Link>
                { isActiveUserNav && <NavigationList userRole={props.userRole}/>}
            </div>
        </>
    )
}

export default LoggedHeader;