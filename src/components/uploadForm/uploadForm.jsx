import {useState} from "react";
import { uploadFiles } from "services/Api";
import { FormCss, InputBoxCss, UploadBtnCss, InputCss } from "./uploadForm.styled";

export const UploadForm = ()=>{

    const [file, setFile] = useState();

    const handleChange = ev => {
        setFile(ev.target.files[0])
        console.log(ev.target.files[0])
    }

    const handleSubmit = e =>{
        e.preventDefault();
        if (!file){
            // notification
            return;
        }
        
        uploadFiles(file)

        
    }

    return (
        <FormCss>
            <InputBoxCss>
                <label htmlFor="file"> </label>
                <InputCss id="file" type="file" accept=".pdf" onChange={handleChange}/>
            </InputBoxCss>
            <UploadBtnCss type="submit" onClick={handleSubmit}>Upload a file</UploadBtnCss>
        </FormCss>
    )
}