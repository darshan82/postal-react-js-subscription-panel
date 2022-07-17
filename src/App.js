import './App.css';
import Home from './pages/Home';
import Delivery from './pages/Delivery'
import Pickup from './pages/Pickup'
import Marketing from './pages/marketing'
import Technology from './pages/technology'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/delivery' element={<Delivery />} />
        <Route path='/pickup' element={<Pickup />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/technology' element={<Technology />} />
        <Route path='/*' element={<h1>Invalid Page</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
