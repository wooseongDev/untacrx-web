import { useState } from 'react';

export default function useCount(initialValue = 0) {
  const [count, setCount] = useState(initialValue);

  const increase = () => {
    setCount((prev) => prev + 1);
  };

  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  return [count, increase, decrease, setCount] as const;
}
