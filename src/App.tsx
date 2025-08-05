
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Component/home'
import BabyCareLanding from './page'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<BabyCareLanding/>}></Route>
        <Route path='/Component' element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
