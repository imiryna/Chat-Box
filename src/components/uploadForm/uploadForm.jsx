import {useState} from "react";
import { uploadFiles } from "services/Api";

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
        <form>
            <label htmlFor="file"> Choose a file</label>
            <input id="file" type="file" accept=".pdf" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Upload a file</button>
        </form>
    )
}