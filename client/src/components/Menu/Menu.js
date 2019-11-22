import React from 'react';
import styles from "./Menu.module.sass";
import menuLinks from "../../constants/menuLinks";
import {Link} from 'react-router-dom';

const Menu = () =>
    <div className={styles.navContainer}>
        <ul className={styles.navigation}>
            <li >
                <Link to={'#'} >
                    Name Ideas
                    <i className="fa fa-angle-down"/>
                </Link>
                <ul className={styles.subNavigation}>
                    {menuLinks.NameIdea.map((subLink, index) => (
                        <li key={index}>
                            <Link to={subLink.href}>
                                {subLink.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li >
                <Link to={'#'} >
                    Contests
                    <i className="fa fa-angle-down"/>
                </Link>
                <ul className={styles.subNavigation}>
                    {menuLinks.Contests.map((subLink, index) => (
                        <li key={index}>
                            <Link to={subLink.href}>
                                {subLink.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li >
                <Link to={'#'} >
                    Our Work
                    <i className="fa fa-angle-down"/>
                </Link>
                <ul className={styles.subNavigation}>
                    {menuLinks.OurWork.map((subLink, index) => (
                        <li key={index}>
                            <Link to={subLink.href}>
                                {subLink.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <Link to={'#'} >
                    Name Ideas
                    <i className="fa fa-angle-down"/>
                </Link>
                <ul className={styles.subNavigation}>
                    {menuLinks.NamesForSale.map((subLink, index) => (
                        <li key={index}>
                            <Link to={subLink.href}>
                                {subLink.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
            <li>
                <Link to={'#'} >
                    Blog
                    <i className="fa fa-angle-down"/>
                </Link>
                <ul className={styles.subNavigation}>
                    {menuLinks.Blog.map((subLink, index) => (
                        <li key={index}>
                            <Link to={subLink.href}>
                                {subLink.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
    </div>;

export default Menu;

