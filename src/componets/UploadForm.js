import React, {useState} from 'react';
import Progress from "./Progress";

const UploadForm = (props) => {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpeg', 'image/tiff']

    const changeHandler = (event) => {
        let selectFile = event.target.files[0]
        if (selectFile && types.includes(selectFile.type)) {
            setFile(selectFile)
            setError(null)
            console.log(file)
        } else {
            setFile(null)
            setError('Select an image file (png, jpeg, tiff)')
            console.log('Error type')
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
            </label>

            <div className='output'>
                {
                    error && <div className='error'>{error}</div>
                }
                {
                    file && <div>{file.name}</div>
                }
                {
                    file && <Progress file={file} setFile={setFile}/>
                }
            </div>
        </form>
    )
};

export default UploadForm;