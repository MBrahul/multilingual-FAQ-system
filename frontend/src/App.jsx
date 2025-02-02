import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FAQS from './pages/FAQS'
import AddFAQ from './pages/AddFAQ'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {


  return (
    <>
    <Router>
      <Navbar/>
      {/* <FAQS/> */}
      <Routes>
        <Route path='/' element={<FAQS/>}/>
      </Routes>
      <Routes>
        <Route path='/add' element={<AddFAQ/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
