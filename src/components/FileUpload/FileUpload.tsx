import React from 'react';
import './FileUpload.scss';

interface FileUploadPropsType {
    onFileSelected: (url: string) => void;
    label: string;
}

const FileUpload = (props: FileUploadPropsType) => {
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