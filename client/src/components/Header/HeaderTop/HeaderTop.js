import React from 'react';
import styles from './HeaderTop.module.sass';
import connect from 'react-redux/es/connect/connect';
import LoggedHeader from "./LoggedHeader/LoggedHeader";
import {signUp} from "../../../actions/actionCreator";
import DefaultHeader from "./DefaultHeader/DefaultHeader";

function HeaderTop(props) {
    const { user } = props;

    function renderHeader() {
        return(
            <>
                {user ? <LoggedHeader user={user} userRole={user.role} userName={user.displayName}/> : <DefaultHeader/>}
            </>
        )
    }

    return(
        <div className={styles.headerTopContainer}>
            {renderHeader()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    signUp: (user) => dispatch(signUp(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop);