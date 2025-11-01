import React from 'react'
import Properties from './Properties'
import { NavLink } from "react-router-dom";

const BestDealContent = (props) => {

    return (
        <div className='bestDealContent'>
            <Properties info={props.info.properties}></Properties>
            <div
                className="bestDealImage"
                style={{ backgroundImage: `url(${props.info.imageUrl})` }}

            ></div>
            <div className='bestDealInfo'>
                <h3 className='bestDealInfoTitle'>{props.info.bestDealTitle}</h3>
                <p className='bestDealInfoDescription'>{props.info.descriptionSections}</p>
                <NavLink to="/menu"><button className='bestDealInfoButton'>SHOP NOW</button></NavLink>
            </div>
        </div>
    )
}

export default BestDealContent
