import NavBar from "./Compunenets/NavBar/NavBar";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import { Footer } from "./Compunenets/Footer/Footer";
import { useState } from "react";
import LoginPopUp from "./Compunenets/LoginPopUp/LoginPopUp";

function App() {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      {showPopUp ? <LoginPopUp setShowPopUp={setShowPopUp} /> : <></>}
      <NavBar setShowPopUp={setShowPopUp}></NavBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
