import { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import Navbar from "./Sections/NavigationBar/Navbar";
import Home from "./Pages/Home";

const App = () => {
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    return () => {
      gsap.ticker.remove(update);
    };
  }, []);
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <div className="min-h-screen w-full subpixel-antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ReactLenis>
  );
};

export default App;
