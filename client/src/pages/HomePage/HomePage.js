import React from 'react';
import styles from './HomePage.module.sass';
import Header from "../../components/Header/Header";

function HomePage() {
    return(
        <div className={styles.homePageContainer}>
            <Header/>
        </div>
    )
}

export default HomePage;