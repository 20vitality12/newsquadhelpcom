import React from 'react';
import styles from './NavigationList.module.sass';
import {Link} from "react-router-dom";
import { buyerNav }  from '../../../../../constants/headerLinks.json';
import { logout } from "../../../../../actions/actionCreator";
import connect from 'react-redux/es/connect/connect';

function NavigationList(props) {
    return(
        <div>
            <ul>
                {buyerNav.map((item, index) =>
                    <li key={index}>
                        <Link onClick={ item.text === 'Logout' ? ()=>{props.logout()}: null} to={item.href}>
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