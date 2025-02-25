import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="card">
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`card-content ${className}`}>
      {children}
    </div>
  );
};

export default Card;
