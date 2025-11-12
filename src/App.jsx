import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {  HomePage, Keyboards, Mouses, Headphones, Buy, Cart, MultiSelect } from "./pages";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/keyboards" element={<Keyboards />} />
          <Route path="/mouses" element={<Mouses />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/multiselect" element={<MultiSelect />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
