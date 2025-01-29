import { useState } from 'react';

const Increment = () => {
  const [num, setNum] = useState(0);

  const handleIncrement = () => {
    setNum(num + 1);
  };

  return (
    <div>
        <h1>Increment</h1>
        <div onClick={handleIncrement} className="cursor-pointer p-2 bg-gray-200 rounded">
          Add +
        </div>
        <div>{num}</div>
    </div>
  )
}

export default Increment