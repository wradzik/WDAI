import React, { useState } from 'react';

export default function Fromularz(){

  const [inputValue, setInputValue] = useState<string>('');
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Tekst do skopiowania"
      />
      <div
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          minHeight: '30px',
          marginTop: '10px',
        }}
      >
        {inputValue}
      </div>
    </div>
  );
};


