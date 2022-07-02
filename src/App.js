import React from 'react'
import Geolocation from './Geolocation'
import Network from './Network'
import RecordView from './RecordView'




const App = () => {
  return (
    <div className='container'>
      <Geolocation />
      <Network />
      <RecordView />
    
    </div>
  )
}

export default App