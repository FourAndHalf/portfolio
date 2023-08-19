import jLogo from '/j Logo.webp'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path = "/" element = {<Home />}/>
        </Routes>
      </Router>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={jLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Let's Make A Portfolio</h1>
    </>
  )
}

export default App
