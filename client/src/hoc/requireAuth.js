import React, { Component } from 'react';
import styles from './requireAuth.module.sass';
import { refresh } from "../actions/actionCreator";
import { REFRESH_TOKEN} from "../constants/constants";
import connect from "react-redux/es/connect/connect";

class LogProps extends Component {
    componentDidMount() {
        if(!this.props.user && localStorage.getItem(REFRESH_TOKEN)){
            this.props.refresh();
        }
    }

    render() {return <div className={styles.applicationContainer}>{this.props.children}</div>}
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
};

const mapDispatchToProps = (dispatch) => ({
    refresh: () => dispatch(refresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(LogProps);