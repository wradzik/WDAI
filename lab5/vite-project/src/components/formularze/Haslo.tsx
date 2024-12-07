import React, { useState } from 'react';

export default function Haslo(){

  const [password, setPassword] = useState<string>('');
  const [password2, setPassword2] = useState<string>('');

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handlePasswordChange2(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword2(event.target.value);
  }
  function messageOutput(){
    if (!password && !password2) {
      return 'Proszę wprowadzić hasło';
    } else if (password !== password2) {
      return 'Hasła nie są zgodne';
    }
    return '';
  }

    return(
        <div>
         <input
            type="text"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Haslo"
          /><br/>
          <input
            type="text"
            value={password2}
            onChange={handlePasswordChange2}
            placeholder="Powtórz haslo"
          />
        <div>{messageOutput()}</div>
        </div>
    )
}