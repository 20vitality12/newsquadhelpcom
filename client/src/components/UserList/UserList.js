import React, { useEffect } from 'react';
import styles from './UserList.module.sass';
import connect from 'react-redux/es/connect/connect';
import ListItem from "./ListItem/ListItem";
import { getUsers, switchUserStatus } from "../../actions/actionCreator";


function UserList(props) {
    useEffect( () => { props.getUsers()},[]);

    const { users } = props;

    function clickContactHandler(user)  {
        props.switchUserStatus(user);
    }

    return(
      <>
          { users &&
            <ul className={styles.list}>
              { users.map( (item, index) => <ListItem data={item} key={index} switchUserStatus={clickContactHandler}/>)}
            </ul>
          }
      </>
    );
}

const mapStateToProps = (state) => {
    return {
        users: state.userReducer.users,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch(getUsers()),
    switchUserStatus: (dataToSend) => dispatch(switchUserStatus(dataToSend))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);