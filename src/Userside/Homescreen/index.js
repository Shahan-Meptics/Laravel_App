
import React from 'react';
import Navbar from '../../Components/Navbar';
import '../../css/homescreen.css';
import WinnerHomeScreen from './pages/WinnerHomeScreen';
import VideoScreen from './pages/VideoScreen';
const Homescreen = () => {
  return (
<>
<div className='container-fluid p-0 bg-white'>
<Navbar/>
<WinnerHomeScreen/>
<div style={{height: '100vh'}} className="video-section">
<VideoScreen />

    </div>


</div>
</>
);
};

export default Homescreen;
