import { useState } from "react";
import { Student } from "./Studenci";

export default function Dodawanie({onClickOuter}:{onClickOuter:(newstudent:Student) => void}){
  const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [year, setyear] = useState('');

  function handleFirstnameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFirstname(event.target.value);
  }

  function handleLastnameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setLastname(event.target.value);
  }

  function handleYearChange(event: React.ChangeEvent<HTMLInputElement>) {
    setyear(event.target.value);
  }

  function ifFkdUp(){
    try{
        return (!Lastname || !year || !Firstname || isNaN(Number(year)));
    }
    catch{
        return true;
    }
  }

  function onClickInner(){
    setFirstname("");
    setLastname("");
    setyear("");
  }

 

    return(
        <div>
         <input
            type="text"
            value={Firstname}
            onChange={handleFirstnameChange}
            placeholder="Imię"
          />&ensp;
          <input
            type="text"
            value={Lastname}
            onChange={handleLastnameChange}
            placeholder="Nazwisko"
          />&ensp;
          <input
            type="text"
            value={year}
            onChange={handleYearChange}
            placeholder="Rok"
          /><br/>
        {ifFkdUp() ?<button disabled>Dodaj</button> : <button onClick={()=>{console.log("in onclick");onClickOuter({imie:Firstname, nazwisko:Lastname, rocznik:Number(year)}); onClickInner()}}>Dodaj</button>}
        </div>)
}