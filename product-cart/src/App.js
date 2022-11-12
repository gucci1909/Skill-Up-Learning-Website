import "./App.css";
import HomePage from "../src/Components/HomePage.jsx";
// import Slider from "../src/Components/slider/Slider.js";
import { Route, Routes } from "react-router-dom";
import SingleProductPage from "./Components/SingleProductPage";
import FinalPaymentPage from "./Components/FinalPaymentPage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/Products/:id" element={<SingleProductPage />}></Route>
        <Route path="/finalPayment" element={<FinalPaymentPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
