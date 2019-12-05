import React, { useState } from 'react';
import styles from './DashboardNavigation.module.sass';
import { Link } from 'react-router-dom';
import {CONTEST_TYPE, DASHBOARD, MESSAGES, ACCOUNT_DETAILS, CHANGE_PASSWORD} from "../../constants/links";

function DashboardNavigation(props) {
    const { isActive, currentPage } =  props;
    const [subLinkContest, setSubLinkContest] = useState(false);
    const [subLinkMessages, setSubLinkMessages] = useState(false);
    const [subLinkAccount, setSubLinkAccount] = useState(false);
    return(
        <div>
            { isActive &&
                <div className={styles.dashboardNavigationSmall}>
                    <Link to={'/'}>
                        <img src="https://www.squadhelp.com/img/SquadHelpSquareWhiteTransparentSmall.png" alt="logo"/>
                    </Link>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </div>
            }
            { !isActive &&
            <div className={styles.dashboardNavigationBig}><div className={styles.fixed}>
                <Link to={'/'}>
                    <img src="https://www.squadhelp.com/img/logo.png" alt="logo"/>
                </Link>
                <p>NAVIGATION</p>

                <ul>
                    <li>
                        <div onClick={() => setSubLinkContest(!subLinkContest)} className={styles.wrap}>
                            <i className="fas fa-th"/>
                            Contests
                            {subLinkContest ? <i className="fa fa-angle-up"/> : <i className="fa fa-angle-right"/>}
                        </div>
                        {subLinkContest &&
                            <ul className={styles.subNavigation}>
                                <li>
                                    <Link to={CONTEST_TYPE}>
                                        Launch Contest
                                    </Link>
                                </li>
                                <li className={currentPage === DASHBOARD ? styles.activePage : ''}>
                                    <Link to={DASHBOARD}>
                                        My Dashboard
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li>
                        <div onClick={() => setSubLinkMessages(!subLinkMessages)} className={styles.wrap}>
                            <i className="far fa-comment-alt"/>
                            Messages
                            {subLinkMessages ? <i className="fa fa-angle-up"/> : <i className="fa fa-angle-right"/>}
                        </div>
                        {subLinkMessages &&
                        <ul className={styles.subNavigation}>
                            <li>
                                <Link to={MESSAGES}>
                                    Message Center
                                </Link>
                            </li>
                        </ul>
                        }
                    </li>
                    <li>
                        <div onClick={() => setSubLinkAccount(!subLinkAccount)} className={styles.wrap}>
                            <i className="far fa-id-card"/>
                            My Account
                            {subLinkAccount ? <i className="fa fa-angle-up"/> : <i className="fa fa-angle-right"/>}
                        </div>
                        {subLinkAccount &&
                        <ul className={styles.subNavigation}>
                            <li className={currentPage === ACCOUNT_DETAILS ? styles.activePage : ''}>
                                <Link to={ACCOUNT_DETAILS}>
                                    Account Details
                                </Link>
                            </li>
                            <li>
                                <Link to={CHANGE_PASSWORD}>
                                    Change Password
                                </Link>
                            </li>
                        </ul>
                        }
                    </li>
                </ul>
            </div></div>
            }
        </div>

    )
}

export default DashboardNavigation;