import React from 'react';
import styles from './App.module.sass';
import { Route, Router, Switch } from 'react-router-dom';
import { DASHBOARD, LOGIN, SIGN_UP } from './constants/links'
import history from './utils/browserHistory';
import LogProps from './hoc/requireAuth';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";

function App (){
    return (
        <LogProps>
            <Router history={history}>
                <div className={styles.container}>
                    <Switch>
                        <Route path="/" exact component={HomePage}/>
                        <Route path={DASHBOARD}  component={DashboardPage}/>
                        <Route path={LOGIN} component={LoginPage}/>
                        <Route path={SIGN_UP} component={SignUpPage}/>
                    </Switch>
                </div>
            </Router>
        </LogProps>
    )
}

export default App;
