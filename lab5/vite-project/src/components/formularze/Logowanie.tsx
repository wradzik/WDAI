import React, { useState } from 'react';

export default function Logowanie(){

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handlePasswordChange2(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword2(event.target.value);
  }

  function ifFkdUp(){
    return (!password || !password2 || !username);
  }

  function ifPassOk(){
    return (password == password2)
  }

    return(
        <div>
         <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Wpisz nazwę użykowanika"
          /><br/>
          <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Wpisz haslo"
          /><br/>
          <input
            type="text"
            value={password2}
            onChange={handlePasswordChange2}
            placeholder="Powtórz haslo"
          /><br/>
        {ifFkdUp() ?<button disabled>Zaloguj</button> : (ifPassOk()? <button onClick={() => alert("Zalogowano poprawnie")}>Zaloguj</button>: <button onClick={() => alert("Hasła nie są zgodne")}>Zaloguj</button>)}
        </div>
    )
}