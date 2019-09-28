import React from 'react';
import styles from './Header.module.sass';
import {Link} from 'react-router-dom';

function Header(props) {
    const { href, title} = props;
    return(
        <div className={styles.authPageHeader}>
            <Link to={'/'}>
                <img src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
            </Link>

            <div className={styles.authNavBtn}>
                <Link to={href}>
                    {title}
                </Link>
            </div>
        </div>
    )
}

export default Header;