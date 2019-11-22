import React from 'react';
import styles from './NavigationList.module.sass';
import {Link} from "react-router-dom";
import { buyerNav, adminNav, creativeNav }  from '../../../../../constants/headerLinks.json';
import { ADMIN, BUYER, CREATIVE} from '../../../../../constants/userRoles';
import { logout } from "../../../../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';

function NavigationList(props) {
    const { userRole } = props;
    return(
        <div className={styles.list}>
            <ul>
                { userRole === BUYER && buyerNav.map((item, index) =>
                    <li key={index}>
                        <Link className={ item.text === 'Logout' ? styles.logout : null } onClick={ item.text === 'Logout' ? () => props.logout() : null} to={item.href}>
                            {item.text}
                        </Link>
                    </li>
                )}
                { userRole === CREATIVE && creativeNav.map((item, index) =>
                    <li key={index}>
                        <Link className={ item.text === 'Logout' ? styles.logout : null } onClick={ item.text === 'Logout' ? () => props.logout() : null} to={item.href}>
                            {item.text}
                        </Link>
                    </li>
                )}
                { userRole === ADMIN && adminNav.map((item, index) =>
                    <li key={index}>
                        <Link className={ item.text === 'Logout' ? styles.logout : null } onClick={ item.text === 'Logout' ? () => props.logout() : null} to={item.href}>
                            {item.text}
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
});

export default connect(null, mapDispatchToProps)(NavigationList);