import React from 'react';
import styles from './Header.module.sass';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

function Header() {
    return(
        <>
            <div className={styles.headerContainer}>
                <div className={styles.header}>
                    <HeaderTop/>
                    <HeaderBottom/>
                </div>
            </div>
        </>


    )
}

export default Header;

