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
            <StatCard count={34} labelLine1="Coffees" labelLine2="Served Daily" />
            <StatCard count={12} labelLine1="Pastries" labelLine2="Baked Daily" />
            <StatCard count={8} labelLine1="Seating" labelLine2="Areas Available" />
            
          </div>
        </div>
      
    </section>
  )
}

export default Map
