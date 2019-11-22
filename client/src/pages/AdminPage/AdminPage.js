import React from 'react';
import UserList from "../../components/UserList/UserList";
import { Redirect } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { ADMIN } from "../../constants/userRoles";

function AdminPage(props) {
    const { user } = props;
    return(
      <>
          { user && user.role !== ADMIN && <Redirect to={'/404'}/> }

          { user && user.role === ADMIN && <UserList/>}
      </>
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
};



export default connect(mapStateToProps)(AdminPage);