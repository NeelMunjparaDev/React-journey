import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import Home from "./components/home/home";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
