import Produkt from "./Produkt.tsx"

export default function NowyKoszyk(props:{produkty:Array<String>}){
    return(
        <div>
            <h1>Produkty:</h1>
            <ul>
                {props.produkty.map((produkt)=>(
                <li>
                    <Produkt nazwa={produkt}/>
                </li>
            ))}
            </ul>
        </div>
    )
}

export function Koszyk(){
    return(
        <div>
            <h1>Produkty:</h1>
            <ul>
                <Produkt nazwa={"apple"}></Produkt>
                <Produkt nazwa={"apple2"}></Produkt>
                <Produkt nazwa={"apple3"}></Produkt>
                <Produkt nazwa={"apple4"}></Produkt>
                <Produkt nazwa={"apple5"}></Produkt>
            </ul>
        </div>
    )
}