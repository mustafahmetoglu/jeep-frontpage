import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import App from './components/nexExperience'
import './index.css'
import { Leva } from 'leva'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Leva  collapsed />

  </React.StrictMode>,
)
