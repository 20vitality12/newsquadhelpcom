import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './ListItem.module.sass';
import { ADMIN } from "../../../constants/userRoles";


function ListItem(props) {
    const { user } = props;
    const { id, email, role, isBanned, displayName} = props.user;

    function notify(){
        toast.warn("You can`t switch administrator status!");
    }

    return(
        <>
            <div className={styles.listItemContainer}>
                <div className={styles.photo}>
                    <img src="https://www.squadhelp.com/assets/nimages/compressed/anonumous-min.png" alt="user-photo"/>
                </div>
                <div className={styles.details}>
                    <p>#{id} | {displayName}</p>
                    <p className={styles.email}>{email}</p>
                    <p className={styles.status}>{role} | {isBanned ? "banned": "active"}</p>
                </div>
                <div className={styles.switchButton}>
                    <div onClick={()=> { user.role !== ADMIN ? props.switchUserStatus(user) : notify()}} className={ isBanned ? styles.checkButtonActiveContainer : styles.checkButtonContainer}>
                        <div className={styles.check}>
                            { isBanned ? <i className="fas fa-times"/> : <i className="fas fa-check"/>}
                        </div>
                    </div>
                </div>
                <ToastContainer closeOnClick={false} closeButton={false} autoClose={2000} pauseOnHover={false}/>
            </div>
            <hr/>
        </>

    );
}

export default ListItem;
