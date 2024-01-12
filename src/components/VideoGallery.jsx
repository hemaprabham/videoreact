import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addheader from './Addheader'


const VideoGallery = () => {
    const [data,ChangeData]=useState([])

    const fetchData=()=>{
        axios.post("http://127.0.0.1:8000/").then(
            (response)=>{
                ChangeData(response.data)
            }
        )
        
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
        <Addheader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {data.map((value,index)=>{
                                return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">
                                <div class="card" width="200%" >
                                    
                                    <img src={value.image} class="img-thumbnail" alt={value.video}/>
                                    <div class="card-body">
                                    
                                    <p class="card-text">{value.subtitles}</p>
                                    </div>
                                    
                                    </div>
                                </div>
                           
                            
                            })}
                         
                            </div>
                            
                        </div>
                    </div>
                </div>


    </div>
  )
}
export default VideoGallery