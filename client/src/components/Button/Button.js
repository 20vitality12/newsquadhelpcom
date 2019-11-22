import React from 'react';
import styles from './Button.module.sass';
import {Link} from 'react-router-dom';

function Button(props) {
    const { text, href } =  props;
    return(
        <div className={styles.customButton}>
            <Link to={href}>
                {text}
            </Link>
        </div>
    )
}

export default Button;