import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import FAQS from './pages/FAQS'
import AddFAQ from './pages/AddFAQ'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UpdateFAQ from './pages/UpdateFAQ'


function App() {


  return (
    <>
    <Router>
      <Navbar/>
      {/* <FAQS/> */}
      <Routes>
        <Route path='/' element={<FAQS/>}/>
        <Route path='/add' element={<AddFAQ/>}/>
        <Route path='/update/:id' element={<UpdateFAQ/>}/>
      </Routes>
      </Router>
    </>
  )
}

export default App
