import React, { useState, useEffect } from 'react';

export default function Tytul(){
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    document.title = title || 'Tytuł';}, [title]);
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTitle(event.target.value);
  }

  return (
    <div style={{ padding: '20px' }}>
      <label style={{ fontSize: '16px', fontWeight: 'bold' }}>
        Zmień tytuł strony:
        <input
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Wpisz nowy tytuł strony..."
        //   style={{
        //     marginLeft: '10px',
        //     padding: '5px',
        //     fontSize: '14px',
        //     width: '300px',
        //   }}
        />
      </label>
    </div>
  );
}

