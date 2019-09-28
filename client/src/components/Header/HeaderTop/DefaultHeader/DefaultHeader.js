import React from 'react';
import styles from '../HeaderTop.module.sass';
import {LOGIN, SIGN_UP} from "../../../../constants/links";
import { Link } from 'react-router-dom';

function DefaultHeader() {
    return(
        <>
            <div className={styles.phoneContainer}>
                <Link to={'/'}>
                    <i className="fas fa-phone-alt"/>
                    (877) 355-3855
                </Link>
            </div>
            <div className={styles.navContainer}>
                <Link to={LOGIN}>Login</Link>
                <Link to={SIGN_UP}>SignUp</Link>
            </div>
        </>
    )
}

export default DefaultHeader;