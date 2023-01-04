import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage/HomePage';
import ResumePage from './ResumePage/ResumePage';
import './scss/main.scss'

function App() {
    return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/resume" element={<ResumePage/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
}

export default App;