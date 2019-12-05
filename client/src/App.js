import React from 'react';
import styles from './App.module.sass';
import { Route, Router, Switch } from 'react-router-dom';
import { DASHBOARD, LOGIN, SIGN_UP, ADMIN_PAGE, ACCOUNT_DETAILS, CHANGE_PASSWORD } from './constants/links'
import history from './utils/browserHistory';
import LogProps from './hoc/requireAuth';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import AdminPage from "./pages/AdminPage/AdminPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import ChangePasswordPage from "./pages/ChangePasswordPage/ChangePasswordPage";

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
                        <Route path={ADMIN_PAGE} component={AdminPage}/>
                        <Route path={ACCOUNT_DETAILS} component={SettingsPage}/>
                        <Route path={CHANGE_PASSWORD} component={ChangePasswordPage}/>
                        <Route path="*" component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        </LogProps>
    )
}

export default App;
