import React from 'react';
import styles from './HeaderBottom.module.sass';
import {CONTEST_TYPE} from '../../../constants/links';
import {Link} from 'react-router-dom';
import Button from "../../Button/Button";
import Menu from "../../Menu/Menu";

function HeaderBottom() {
    return(
        <div className={styles.headerBottomContainer}>
            <Link to={'/'}>
                <img src="https://www.squadhelp.com/images/squadhelp-logo-color.jpg" alt="logo"/>
            </Link>

            <Menu/>
            <Button href={CONTEST_TYPE} text={'START CONTEST'}/>
        </div>
    )
}

export default HeaderBottom;