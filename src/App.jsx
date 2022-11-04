import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Thanks from './pages/Thanks'

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/thanks' element={<Thanks />}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
