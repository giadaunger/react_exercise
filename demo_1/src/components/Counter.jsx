import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  }, []); 

  return (
    <div>
      Count: {count}
    </div>
  );
};

export default Counter;