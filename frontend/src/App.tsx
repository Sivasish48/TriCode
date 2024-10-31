import './index.css';
// import Header from './components/Header';
import Home from './Pages/Home';
import Compiler from './Pages/Compiler';
import NotFound from './Pages/NotFound';
import Landing from './Pages/Landing';
import { Routes, Route } from 'react-router-dom';
import  Login  from './Pages/Login';
import  SignUp  from './Pages/SignUp';
import { Toaster } from './components/ui/sonner';
function App () {
  

  return (
    <>
     
      {/* {location.pathname !== '/' && <Header />} */}
      <Toaster position='bottom-right' theme="dark" />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/compiler" element={<Compiler />} />
        <Route path="/compiler/:urlId" element={<Compiler />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
