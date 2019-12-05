import React, {useState, useEffect} from 'react';
import _ from 'lodash';
import styles from './SettingsPage.module.sass';
import connect from 'react-redux/es/connect/connect';
import DashboardNavigation from "../../components/DashboardNavigation/DashboardNavigation";
import DashboardHeader from "../../components/DashboardHeader/DashboardHeader";
import {ACCOUNT_DETAILS} from '../../constants/links';
import Settings from "../../components/Settings/Settings";
import AboutMe from "../../components/AboutMe/AboutMe";
import UploadAvatar from "../../components/UploadAvatar/UploadAvatar";
import { getUserData, updateFullName, updateAboutMe, uploadUserPhoto } from "../../actions/actionCreator";

function SettingsPage(props) {
    const { user, userData } = props;
    const [isActive, setActive] = useState(false);
    const [editFullName, setEditFullName] = useState(false);
    const [editAboutMe, setEditAboutMe] = useState(false);

    useEffect(() => {
       props.getUserData();
    },[]);

    function submitFullNameSettings(values) {
        const dataToSend = _.pick( values, ['firstName', 'lastName', 'displayName' ]);
        props.updateFullName(dataToSend);
        setEditFullName(!editFullName);
    }
    function submitAboutMeSettings(values) {
        const dataToSend = _.pick( values, [
            'interests',
            'motivation',
            'address',
            'city',
            'stateOrProvince',
            'pin',
            'country',
            'phone',
            'linkedIn' ,
            'twitter'
        ]);
        props.updateAboutMe(dataToSend);
        setEditAboutMe(!editAboutMe);
    }

    console.log(user)
    return(
        <div className={styles.settingsPageContainer}>
            <DashboardNavigation currentPage={ACCOUNT_DETAILS} isActive={isActive}/>
            <div className={styles.pageContainer}>
                {user && <DashboardHeader
                    isActive={isActive}
                    setActive={setActive}
                    user={user}
                />}
                <div className={styles.container}>
                    {userData && <Settings
                        isActive={editFullName}
                        setIsActive={setEditFullName}
                        onSubmit={submitFullNameSettings}
                        userData={userData}
                    />}

                    {userData && <UploadAvatar
                        uploadPhoto={props.uploadUserPhoto}
                    />}

                    {userData && <AboutMe
                        isActive={editAboutMe}
                        setIsActive={setEditAboutMe}
                        onSubmit={submitAboutMeSettings}
                        userData={userData}
                    />}
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        userData: state.userReducer.userData,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getUserData: () => dispatch(getUserData()),
    updateFullName: (dataToSend) => dispatch(updateFullName(dataToSend)),
    updateAboutMe: (dataToSend) => dispatch(updateAboutMe(dataToSend)),
    uploadUserPhoto: (dataToSend) => dispatch(uploadUserPhoto(dataToSend))
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingsPage);