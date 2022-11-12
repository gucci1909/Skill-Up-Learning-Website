import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"

import HomePage from './Pages/HomePage/HomePage';
import SingleProductPage from './Pages/HomePage/components/SingleProductPage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Products/:id" element={<SingleProductPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
