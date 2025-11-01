import React from 'react';

const StatCard = (props) => {
  return (
    <div className="stat-card">
      

      <div className="stat-card-content">
        

        <div className="stat-count">{props.count}</div>
        
        <div className="stat-label">
          <div className="statLabel">{props.label}</div>
          
        </div>
        
      </div>
    </div>
  );
};

export default StatCard;

