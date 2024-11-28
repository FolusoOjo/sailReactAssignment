import Homepage from "./pages/Homepage";
import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
      {/* <Homepage /> */}
      {/* <About /> */}
    </>
  );
}
export default App;
