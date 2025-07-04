import React, { useRef, useState } from 'react';

function ClickCounter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current += 1;

  return (
    <div>
      <p>Clicked {count} times</p>
      <p>Component rendered {renderCount.current} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default ClickCounter;