import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

function App() {
  return (

  <div id="box">
    <Header />
    {/* Main Content */}
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    

    </main>
  </div>
  )
}

export default App;
