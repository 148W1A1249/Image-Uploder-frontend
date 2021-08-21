import React, { useState }  from 'react';

function Upload() {

    const [previewSource, setpreviewSource] = useState([]);

    const handleFilesInputChange =(e)=>{
            var files = [];
            for(let i=0;i<e.target.files.length;i++){
                files.push(e.target.files[i]);
            }
            previewFile(files);            
    }
 
    const  previewFile =(fileItems)=>{
        let data = [];
        fileItems.forEach(element => {
            const reader = new FileReader();
            reader.readAsDataURL(element);
            reader.onloadend = ()=>{
                const {result} = reader;
                data.push(result);
            // setpreviewSource([...previewSource,result])
        }
        });
        setpreviewSource(data);
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!previewSource) return;
        UploadImage(previewSource);
    }
    const UploadImage= (files)=>{
        files.map(async(obj)=>{
            try {
                await fetch('https://image-uploader-myself-beaware.herokuapp.com/api/upload',{
                    method:"POST",
                    body: JSON.stringify({data: obj}),
                    headers: {'Content-type': "application/json"}
                });
            } catch (error) {
                console.error(error)
            }
        })
        setTimeout(() => {window.location.reload()}, 4000);
    }

  return <>
 
    <div className="container p-md-5 mt-md-0 mt-5">
        <div className="upload">
            <span>Upload/Home</span>
            <form onSubmit={handleSubmit} className="mt-3">
                {/* <input type="file" multiple /> */}
                <input type="file" name="image" onChange={handleFilesInputChange}  className="form-control mb-3" multiple />
                {/* <input type="file" name="image" onChange={handleFilesInputChange} value={fileInputState} className="form-input" multiple /> */}
                {/* <button onClick={handleSubmit} disabled={previewSource.length===0 ? true:false } className="btn btn-info m-md-0 m-2" type="submit">Submit</button> */}
                <button className="btn btn-info m-md-0 m-2" type="submit">Submit</button>
            </form>
        </div>
       

     </div>
    
  </>
}

export default Upload;
