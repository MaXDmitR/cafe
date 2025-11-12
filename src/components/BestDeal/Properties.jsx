import React from 'react'
import { useAnimatedInView } from '../../hooks/useAnimatedInView'


const Properties = (props) => {

  const { ref, classNames } = useAnimatedInView({
    direction: 'left',
    timer: 500,
    threshold: 0.2,
    triggerOnce: true,
    animationSpeed: '1s',
    animationDistance: '-50px'
  })

  return (
    <div ref={ref} className={`bestDealProperties ${classNames}`}>
      {props.info.map((property, index) => (
        <div className="detailRow" key={index}>
          <div className="detailLabel">{property.label}</div>
          <div className="detailValue">{property.value}</div>
        </div>
      ))}

    </div>
  )
}

export default Properties
