import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tree from './page/Tree'
import Contact from './page/Contact'

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Tree />}/>
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
