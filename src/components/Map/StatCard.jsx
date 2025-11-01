import React from 'react';

const StatCard = (props) => {
  return (
    <div className="stat-card">
      

      <div className="stat-card-content">
        

        <div className="stat-count">{props.count}</div>
        
        <div className="stat-label">
          <div className="stat-label-line-1">{props.labelLine1}</div>
          <div className="stat-label-line-2">{props.labelLine2}</div>
        </div>
        
      </div>
    </div>
  );
};

export default StatCard;

