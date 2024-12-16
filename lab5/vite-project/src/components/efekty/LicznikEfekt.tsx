import { useState, useEffect } from 'react';

export function LicznikEfekt(): JSX.Element {
  const [count, setCount] = useState<number>(0); // Stan licznika

  useEffect(() => {
    console.log('Hello world');
  }, []);

  useEffect(() => {
    console.log(`Licznik zwiększył się do ${count}`);
  }, [count]);

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Dodaj
      </button>
    </div>
  );
}
