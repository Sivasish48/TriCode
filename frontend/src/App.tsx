

import './index.css'
import Header from './components/Header'
import Home from './Pages/Home'
import Compiler from './Pages/Compiler'
import NotFound from './Pages/NotFound'
import { Routes,Route } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
