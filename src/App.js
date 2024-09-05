import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateHackathon from './components/CreateHackathon'
import EditHackathon from './components/EditHackathon'
import HackathonDetail from './components/HackathonDetail'
import Header from './components/Header'
import Homepage from './components/Homepage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path="/hackathon/:id" element={<HackathonDetail />} />
          <Route path='/edit/:id' element = {<EditHackathon/>} />
          <Route path='/create' element = {<CreateHackathon/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App