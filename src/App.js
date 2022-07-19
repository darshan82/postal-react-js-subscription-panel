import "./App.css";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import Pickup from "./pages/Pickup";
import Marketing from "./pages/Marketing";
import Technology from "./pages/Technology";
import Editions from "./pages/Editions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

const WindowSizeContext = React.createContext();
function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [windowSize]);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  return (
    <WindowSizeContext.Provider value={windowSize}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/pickup" element={<Pickup />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/technology" element={<Technology />} />
          <Route path='/editions' element={<Editions />} />
          <Route path="/*" element={<h1>Invalid Page</h1>} />
        </Routes>
      </BrowserRouter>
    </WindowSizeContext.Provider>
  );
}

export {App, WindowSizeContext};
