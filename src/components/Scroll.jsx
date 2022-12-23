import React, { useRef } from 'react';

const Scroll = () => {
  const scollToRef = useRef();

  return (
    <div className="container">
      <button onClick={() => scollToRef.current.scrollIntoView()}>
        Scroll
      </button>
      <div ref={scollToRef}>scroll Me</div>
    </div>
  );
};

export default Scroll;