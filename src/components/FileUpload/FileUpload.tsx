import React from 'react';
import './FileUpload.scss';

const FileUpload = (props: any) => {
    const fileSelected = (e: any) => {
        props.onFileSelected(window.URL.createObjectURL(e.target.files[0]))
    }
    return (
        <div className="file-upload-container">
            <button className="file-upload-button">
                <input name="photo" type="file" onChange={fileSelected}/>
                {props.label}
            </button>
        </div>
    );
}

export default FileUpload;