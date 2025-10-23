import React from 'react'
import Properties from './Properties'

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
                    <button className='bestDealInfoButton'>Shop Now</button>
            </div>
        </div>
    )
}

export default BestDealContent
