// import { createContext, useEffect, useState } from 'react'
import './App.css'
import Home from './comps/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Map from './comps/Map'
import Profile from './comps/Profile'
import Header from './comps/Header'
import Options from './comps/Options'

function App() {
  return (
  <BrowserRouter>
 <Header />
  <Options/>
<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/map' element={<Map/>}></Route>
  <Route path='/profile' element={<Profile/>}></Route>
  <Route path='*' element={<h1>Pg not found</h1>}></Route>
</Routes>
  </BrowserRouter>
  )
}

export default App
