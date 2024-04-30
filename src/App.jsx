import "./App.css";
import { CartProvider } from "./components/CartContext";
import Cartpage from "./components/Cartpage";
import Fetchdata from "./components/Fetchdata";
import Navbar from "./components/Navbar";
import {Routes,Route}from "react-router-dom"
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Notfoundpage from "./components/Notfoundpage";

function App() {
  return (
    <>
      <CartProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Fetchdata />} />
            <Route path="/cart" element={<Cartpage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="*" element={<Notfoundpage/>} />
          </Routes>
        </div>
      </CartProvider>
    </>
  );
}

export default App;
