import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/exerciseDetail' element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </>
  )
}

export default App