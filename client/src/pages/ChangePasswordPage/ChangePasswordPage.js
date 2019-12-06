import React, {useState} from 'react';
import _ from 'lodash';
import styles from './ChangePasswordPage.module.sass';
import connect from 'react-redux/es/connect/connect';
import DashboardNavigation from "../../components/DashboardNavigation/DashboardNavigation";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import {CHANGE_PASSWORD} from '../../constants/links';
import ChangePassword from "../../components/ChangePassword/ChangePassword";
import { updatePassword } from "../../actions/actionCreator";

function ChangePasswordPage(props) {
    const { user, error } = props;
    const [isActive, setActive] = useState(false);

    function submitPasswordChange(values) {
        const dataToSend = _.pick( values, ['password', 'newPasswordRepeat']);
        props.updatePassword(dataToSend);
    }

    console.log(error)
    return(
        <div className={styles.changePasswordContainer}>
            <DashboardNavigation currentPage={CHANGE_PASSWORD} isActive={isActive}/>
            <div className={styles.pageContainer}>
                {user && <DashboardHeader
                    isActive={isActive}
                    setActive={setActive}
                    user={user}
                />}

                <div className={styles.container}>
                    {error && <div className={styles.error}>
                        <p><span>Danger!</span>Existing Password does not match</p>
                    </div>}

                    {<ChangePassword onSubmit={submitPasswordChange}/>}
                </div>


            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        error: state.userReducer.error
    }
};

const mapDispatchToProps = (dispatch) => ({
    updatePassword: (dataToSend) => dispatch(updatePassword(dataToSend))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordPage);