import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsOfService from './pages/TermsOfService.jsx'
import './index.css'  // ← Esta línea es crucial

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/politica-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos-servicio" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)