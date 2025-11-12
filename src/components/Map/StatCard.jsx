import React from 'react';
import { useAnimatedInView } from '../../hooks/useAnimatedInView';

const StatCard = (props) => {

  const { ref, classNames } = useAnimatedInView({
    direction: 'right',
    timer: 500,
    threshold: 0.1,
    triggerOnce: true,
    animationSpeed: '1s',
    animationDistance: '50px'
  })

  return (
    <div ref={ref} className={`animationWraper ${classNames}`}>
      <div  className='stat-card'>
        <div className="stat-card-content">
          <div className="stat-count">{props.count}</div>

          <div className="stat-label">
            <div className="statLabel">{props.label}</div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default StatCard;

