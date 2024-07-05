

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './component/NavBar'
import DashBoard from './component/DashBoard'
import Login from './component/Login'
import SignUp from './component/SignUp'
import Home from './component/Home'
import My404Component from './component/My404Component'
import Footer from './component/Footer'

function App() {


  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/dashboard' element={<DashBoard/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='*' exact={true} element={<My404Component/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
