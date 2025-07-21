import React, { useEffect, useRef } from 'react';

const CircleProgressDot = ({ progress = 0, index, isActive, onClick}) => {
  const radius = 14;
  const stroke = 3;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset=circumference-((progress/100)*circumference);



  return (
    <svg  width={2*radius} onClick={onClick}  height={2*radius} className={`cursor-pointer transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-100'}`} >

      <circle
       cx={radius}
       cy={radius}
       fill='#fff'
       stroke='#FFFFFF' 
      strokeWidth={stroke}
       r={normalizedRadius}
      />

      <circle
       cx={radius}
       strokeWidth={stroke}
       r={normalizedRadius}
       cy={radius}
       stroke='#22c55e'
       fill='transparent'
       strokeDasharray={circumference}
       strokeDashoffset={offset}
        strokeLinecap="round"
      style={{  transition: 'stroke-dashoffset 0.5s ease-out', }}
       
      
      />

      <text 
       x="50%"
       y="50%"
       dx="0em"
       dy="0.2em"
       
       textAnchor='middle'
       fontSize="15"
        fill={isActive ? '#22c55e' : '#999'}
       >
        {index+1}
      </text>


        


      

    </svg>
  );
};

export default CircleProgressDot;
