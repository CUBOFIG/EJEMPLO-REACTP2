import { useState, useEffect } from "react";

const useCount = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }
  useEffect(() => {
    console.log(count);
  }, [count]);

  return { count, decrease, increase };
};

export default useCount;
