import React, { useState } from 'react';
import styles from './UploadAvatar.module.sass';
import axios from '../../api/interceptor';
import {Field, reduxForm} from 'redux-form';
import input from '../CustomInputs/authInput';

function UploadAvatar(props) {
    const { uploadPhoto } =  props;
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const setPhoto = e => {
        e.preventDefault();
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };
    const fileInput = React.createRef();

    function handleSubmit1(e) {
        e.preventDefault();
        const data = new FormData();
        data.append('file', fileInput.current.files[0])
        axios.post("http://localhost:3000/api/user/upload-user-photo", data).then(response => {
            uploadPhoto(response)
        });
        setFileName('');
    }
    return(
        <form onSubmit={handleSubmit1} className={styles.uploadPhotoCard}>
            <div className={styles.cardName}>
                <p>UPLOAD PHOTO</p>
            </div>
                <div className={styles.inputRow}>
                    <Field
                        id={'file'}
                        component={input}
                        type={'file'}
                        name={'file'}
                        test={fileInput}
                        handlerChange={setPhoto}
                    />
                    <div className={styles.browse}>
                        <label htmlFor={'file'}>
                            <span className={styles.left}>{fileName || 'No file'}</span>
                            <span className={styles.right}>Browse</span>
                        </label>
                    </div>
                </div>
            <button type={'submit'} >
                <span>Update</span>
            </button>

        </form>
    )
}

export default reduxForm({
    form: 'form',
})(UploadAvatar);