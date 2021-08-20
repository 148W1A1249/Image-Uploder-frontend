import React, { useState,useEffect }  from 'react';
// import {Image,Video} from 'cloudinary-react';

function Galary() {
    const [ImageIds, setImageIds] = useState()
    const loadImages = async()=>{
        try {
            const res = await fetch("/api/images");
            const data=await res.json();
            setImageIds(data);
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        loadImages()
    }, [])
    return <>
     <div className="container p-md-5 mt-md-0 mt-5">
        <div className="galary">
            <span>Galary/Home</span>
            <div className="container mt-4 ml-4" style={{display:'flex',flexDirection:"row",flexWrap:"wrap"}}>
                    {
                        ImageIds && ImageIds.map((obj,ind)=>{
                            if(obj[1]==="png"|| obj[1]==="jpg"){
                                return <img key={ind} src={obj[0]} width="300" height="175" alt="galary img" style={{margin:"10px"}} />
                               
                            }
                            if(obj[1]==="mp4"|| obj[1]==="webm"){
                                return <video height="175" width="300" controls style={{margin:"10px"}}>
                                <source src={obj[0]}/>
                              </video> 
                               
                            }
                            return null;
                        })
                    }
            </div>
        </div>
     </div>
    </>
  }
  
  export default Galary;
  