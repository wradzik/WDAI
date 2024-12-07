import { useState } from "react";

export default function Aktualizacja(){
    const[dane, setDane] = useState({nazwa:"Pomidor", cena:50});
    const updateDane = () =>{
        setDane(prevDane => ({...prevDane, cena:100}));
    }
    return(
        <div>Aktualnie {dane.nazwa} kosztuje {dane.cena}<br/><br/>
        <button onClick={updateDane}>Aktualizuj</button>
        </div>
    )
}