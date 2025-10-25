import React from 'react'
import Location from './Location'
import TitleBlock from './TitleBlock'
import { FaCar, FaWalking } from "react-icons/fa";
import { MdDirectionsBike } from "react-icons/md";

const Map = () => {
  return (
    <section className='mapSection'>


      <div className="mapWrapper">
        <div className="infoCard">
          <h3>Visit Us</h3>
          <p>Mon–Fri: 8:00 – 21:00</p>
          <p>Sat–Sun: 9:00 – 23:00</p>
          <p>📞 +380 67 123 45 67</p>
          <p>📍 Kyiv, Coffee St 12</p>
        </div>

        <div className='mapTitleContainer'>
          <TitleBlock />
          <Location />
        </div>

        <div className="infoCard">
          <h3>How to Get Here</h3>
            <p><FaWalking /> 5 min from Center</p>
            <p><FaCar /> Free Parking</p>
            <p><MdDirectionsBike /> Bike Friendly</p>
        </div>
      </div>
    </section>
  )
}

export default Map
