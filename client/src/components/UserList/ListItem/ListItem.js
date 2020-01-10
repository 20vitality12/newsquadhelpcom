import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import styles from './ListItem.module.sass';
import { ADMIN } from "../../../constants/userRoles";
import {imagesURL} from "../../../api/baseURL";


function ListItem(props) {
    let { data } = props;
    const user = data.User;
    const filename = data.filename ? data.filename : 'anonumous.png';
    function notify(){
        toast.warn("You can`t switch administrator status!");
    }

    return(
        <>
            <div className={styles.listItemContainer}>
                <div className={styles.photo}>
                    <img src={imagesURL +  filename} alt="userAvatar"/>
                </div>
                <div className={styles.details}>
                    <p>#{user.id} | {user.displayName}</p>
                    <p className={styles.email}>{user.email}</p>
                    <p className={styles.status}>{user.role} | {user.isBanned ? "banned": "active"}</p>
                </div>
                <div className={styles.switchButton}>
                    <div onClick={()=> { user.role !== ADMIN ? props.switchUserStatus(user) : notify()}} className={ user.isBanned ? styles.checkButtonActiveContainer : styles.checkButtonContainer}>
                        <div className={styles.check}>
                            { user.isBanned ? <i className="fas fa-times"/> : <i className="fas fa-check"/>}
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
