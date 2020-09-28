import React from 'react';

const Loading = () => {
  return (
    <div className="loading">
      <h3> Animating Loading Feature</h3>
        <p>Is loading ...</p>
        <div 
          style={{
            background: "var(--primary)",
            height: 6,
            width: 100
          }}
        />
    </div>
  );
};

export default Loading;
