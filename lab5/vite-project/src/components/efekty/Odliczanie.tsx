import { useState, useEffect, useRef } from 'react';

export default function Odliczanie(){
  const [time, setTime] = useState<number>(15.0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);


  const toggleCountdown = () => {
    if (isRunning) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      intervalRef.current = null;
    } else {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => Math.max(0, prevTime - 0.1));
      }, 100);
    }
    setIsRunning((prev) => !prev);
  };

  useEffect(() => {
    if (time <= 0) {
      clearInterval(intervalRef.current as NodeJS.Timeout);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [time]);

  const formatTime = (time: number): string => {
    return `${time.toFixed(1)} sek`;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Odliczanie</h2>
      <div
        style={{
          fontSize: '2rem',
          margin: '20px auto',
          padding: '10px',
          border: '1px solid #ccc',
          width: '200px',
        }}
      >
        {formatTime(time)}
      </div>
      <button
        onClick={toggleCountdown}
        disabled={time <= 0}
      >
        {time <= 0 ? 'Odliczanie zakończone' : isRunning ? 'STOP' : 'START'}
      </button>
    </div>
  );
}
