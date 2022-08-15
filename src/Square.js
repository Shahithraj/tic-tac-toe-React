import React from 'react';
import './App.css';

const Square = ({ value, chooseSqaure }) => {
  return (
    <div className="square" onClick={chooseSqaure}>
      {value}
    </div>
  );
};

export default Square;
