import React from 'react'
import Geolocation from './Geolocation'
import Network from './Network'
import RecordView from './RecordView'
import './App.css'



const App = () => {
  return (
    <div className='main-container'>
    <div className='location-container'>
    <h2>Geo-Location Details</h2>
    <Geolocation />
    </div>
    <div className='network-container'>
    <h2>Network Details</h2>
    <Network />
    </div>
    <div className='video-container'>
    <h2>Audio/Video Recorder</h2>
    <RecordView />
    </div>
    </div>
  )
}

export default App