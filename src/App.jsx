import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Tree from './page/Tree'
import Contact from './page/Contact'
import Thanks from './page/Thanks'

function App() {
  return (
      <>
      <Router>
        <Routes>
          <Route path='/' element={<Tree />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/thanks' element={<Thanks />}/>
        </Routes>
      </Router>
      </>
  )
}

export default App
