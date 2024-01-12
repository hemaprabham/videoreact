import axios from 'axios';
import React, { useState } from 'react';
import Addheader from './Addheader';

const VideoUpload = () => {
  const [inputfield, ChangeInputField] = useState({
    video: null,
    subtitles: '',
    image: null,
  });

  const inputHandler = (event) => {
    const { name, value, type, files } = event.target;

    // If the input is a file input, use the files property
    const inputValue = type === 'file' ? files[0] : value;

    ChangeInputField({ ...inputfield, [name]: inputValue });
  };

  const uploadVideo = () => {
    const formData = new FormData();
    formData.append('video', inputfield.video);
    formData.append('subtitles', inputfield.subtitles);
    formData.append('image', inputfield.image);

    axios.post('http://127.0.0.1:8000/upload/', formData)
      .then((response) => {
        alert(response.data.status);
      })
      .catch((error) => {
        console.error('Error uploading video:', error);
      });
  };

  return (
    <div>
      <Addheader/>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="card">
                {/* Other form fields */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="video" className="label-control">Video</label>
                  <input type="text" className="form-control" name="video" onChange={inputHandler} accept="video/*" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="subtitles" className="label-control">Subtitles</label>
                  <input type="text" className="form-control" name="subtitles" value={inputfield.subtitles} onChange={inputHandler} />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <label htmlFor="image" className="label-control">Image</label>
                  <input type="text" className="form-control" name="image" value={inputfield.image} onChange={inputHandler} />
                </div>
                {/* Add other form fields as needed */}
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                  <button onClick={uploadVideo} className="btn btn-warning">Upload Video</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;
