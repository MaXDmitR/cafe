import React from 'react'
import Properties from './Properties'
import { NavLink } from "react-router-dom";
import { useAnimatedInView } from '../../hooks/useAnimatedInView';

const BestDealContent = (props) => {

    const { ref, classNames } = useAnimatedInView({
        direction: 'right',
        timer: 500,
        threshold: 0.2,
        triggerOnce: true,
        animationSpeed: '1s',
        animationDistance: '50px'
      })

    return (
        <div className='bestDealContent'>
            <Properties info={props.info.properties}></Properties>
            <div
                className="bestDealImage"
                style={{ backgroundImage: `url(${props.info.imageUrl})` }}

            ></div>
            <div ref={ref} className={`bestDealInfo ${classNames}`}>
                <h3 className='bestDealInfoTitle'>{props.info.bestDealTitle}</h3>
                <p className='bestDealInfoDescription'>{props.info.descriptionSections}</p>
                <NavLink to="/menu"><button className='bestDealInfoButton'>SHOP NOW</button></NavLink>
            </div>
        </div>
    )
}

export default BestDealContent
