//import { useState } from 'react'
import './App.css'
import Formularz from './components/formularze/Formularz.tsx'
import Haslo from './components/formularze/Haslo.tsx'
import Logowanie from './components/formularze/Logowanie.tsx'
import Aktualizacja from './components/inne/Aktualizacja.tsx'
import Ternary from './components/inne/Ternary.tsx'
import NowyKoszyk from './components/koszyk/Koszyk.tsx'
import NowyLicznik from './components/liczniki/Licznik.tsx'
import StudentManager from './components/studenci/Studenci.tsx'
function App() {

  return (
    <>
      <NowyKoszyk produkty={["jabłko", "banan", "gruszka", "banan2", "innyowoc"]}/>
      <hr/>
      <NowyLicznik></NowyLicznik>
      <hr/>
      <Formularz></Formularz>
      <hr/>
      <Haslo></Haslo>
      <hr/>
      <Logowanie></Logowanie>
      <hr/>
      <Ternary></Ternary>
      <hr/>
      <Aktualizacja></Aktualizacja>
      <hr/>
      <StudentManager></StudentManager>
      <hr/>

    </>
    
  )
}

export default App
