import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import VideoUpload from './components/VideoUpload';
import VideoGallery from './components/VideoGallery';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path='' element={<VideoUpload/>} />
     <Route path='view' element={<VideoGallery/>} />
     
     </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
