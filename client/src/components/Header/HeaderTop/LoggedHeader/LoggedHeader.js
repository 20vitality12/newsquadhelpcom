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
                <span>{props.userName}</span>
                <i  className="fa fa-angle-down"/>
                { isActiveUserNav && <NavigationList/>}
            </div>
        </>
    )
}

export default LoggedHeader;