import React from 'react'
import Location from './Location'
import TitleBlock from './TitleBlock'
import StatCard from './StatCard';

const Map = () => {
  return (
    <section className='mapSection'>
        <div className="mapWrapper">
          <div className='mapTitleContainer'>
            <TitleBlock />
            <Location />
          </div>

          <div className="infoCard">
            <StatCard count={34} label="Coffees Served Daily"  />
            <StatCard count={12} label="Pastries Baked Daily"  />
            <StatCard count={8} label="Seating Areas Available"  />
            
          </div>
        </div>
      
    </section>
  )
}

export default Map
