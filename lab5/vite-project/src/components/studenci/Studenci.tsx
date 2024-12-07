import { useState } from "react"
import Dodawanie from "./Dodawanie";

export interface Student{
    imie: string,
    nazwisko: string,
    rocznik: number
}
export default function StudentManager(){
    const [Students, setStudents] = useState([
        {imie:"Pan", nazwisko:"Od-Kebaba", rocznik:1999},
        {imie:"Człowiek", nazwisko:"Sukcesu", rocznik:1969},
        {imie:"Butelka", nazwisko:"Wody", rocznik:1200},
        {imie:"Dziekan", nazwisko:"WI", rocznik:2024},
        {imie:"Kot", nazwisko:"Profesora-Faliszewskiego", rocznik:2022}
    ]);

    function addStudent(newstudent:Student){
        console.log("infunction")
        setStudents([...Students, newstudent]);
    }

    return(
        <div>
            <h3>Studenci</h3>
            <table>
                <tr>
                    <td>Imie</td>
                    <td>Nazwisko</td>
                    <td>Rocznik</td>
                </tr>
            {
                Students.map((studnet) =>(
                    <tr>
                        <td>{studnet.imie}</td>
                        <td>{studnet.nazwisko}</td>
                        <td>{studnet.rocznik}</td>
                    </tr>
                ))
            }
            </table><br/>
            <Dodawanie onClickOuter={addStudent}></Dodawanie>
        </div>
    )
}


export function Studenci(){
    let Students:Student[] = [
        {imie:"Pan", nazwisko:"Od-Kebaba", rocznik:1999},
        {imie:"Człowiek", nazwisko:"Sukcesu", rocznik:1969},
        {imie:"Butelka", nazwisko:"Wody", rocznik:1200},
        {imie:"Dziekan", nazwisko:"WI", rocznik:2024},
        {imie:"Kot", nazwisko:"Profesora-Faliszewskiego", rocznik:2022}
    ]
    return(
        <div>
            <h3>Studenci</h3>
            <table>
                <tr>
                    <td>Imie</td>
                    <td>Nazwisko</td>
                    <td>Rocznik</td>
                </tr>
            {
                Students.map((studnet) =>(
                    <tr>
                        <td>{studnet.imie}</td>
                        <td>{studnet.nazwisko}</td>
                        <td>{studnet.rocznik}</td>
                    </tr>
                ))
            }
            </table>
            
        </div>
    )
}