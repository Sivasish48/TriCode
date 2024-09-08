import './index.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Compiler from './Pages/Compiler';
import NotFound from './Pages/NotFound';
import Landing from './Pages/Landing';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <>
     
      {location.pathname !== '/' && <Header />}
      
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
