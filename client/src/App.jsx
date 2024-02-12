import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage"
import PhoneListPage from "./pages/PhoneListPage"

import './App.css'

function App() {

  return (
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhoneListPage />} />
        </Routes>
  )
}

export default App
