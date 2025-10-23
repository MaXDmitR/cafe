import React from 'react'

const Properties = (props) => {
  return (
    <div className="bestDealProperties">
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
