//import { useState } from 'react'
import './App.css'
import Formularz from './components/formularze/Formularz.tsx'
import Haslo from './components/formularze/Haslo.tsx'
import NowyKoszyk from './components/koszyk/Koszyk.tsx'
import NowyLicznik from './components/liczniki/Licznik.tsx'
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
    </>
    
  )
}

export default App
