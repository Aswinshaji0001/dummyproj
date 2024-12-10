import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LoginPage from './Components/Login'
import Home from './Components/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/login' Component={LoginPage}></Route>
        <Route path='/' Component={Home}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
