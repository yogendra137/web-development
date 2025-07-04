import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import PasswordManager from './components/PasswordManager'
import ClickCounter from './components/counter'

function App() {


  return (
    <>
    <Navbar/>
    <PasswordManager/>
  <ClickCounter/>
    </>
  )
}

export default App
