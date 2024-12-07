import Przycisk from "./Przycisk";

export default function NowyLicznik(){
    function FindAdd(){
        console.log("inside")
        var temp = document.getElementById("counter-licznik1");
        console.log(temp)
        if(temp){
            temp.innerHTML = String(Number(temp.innerHTML) + 1);
    }}
    return (
        <div>
            <h3 id="counter-licznik1">0</h3>
            <Przycisk onClick={FindAdd}></Przycisk>
        </div>
    )
}


export function Licznik(){
    return (
        <div>
            <h3 id="counter-licznik1">0</h3>
            <button onClick={()=>{
                let temp = document.getElementById("counter-licznik1");
                if(temp){
                    temp.innerHTML = String(Number(temp.innerHTML) + 1);
                }
            }}>Dodaj</button>
        </div>
    )
}