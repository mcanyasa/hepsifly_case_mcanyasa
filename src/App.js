import React from "react";
import Header from "./components/Header/Header";
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Modal from "./components/UI/Modal/Modal";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} /> 
      <Route path="/" element={<Modal
          title="Ürünü silmek istediğinize emin misiniz?"
          text="Ürünü sepet listenizden kaldırmak istediğinizden emin misiniz? Dilerseniz ürünü sepetinizde tutup fiyatı düştüğünde haberdar olabilirsiniz."
        />} /> 
       <Route path="/" element={<Backdrop /> } /> 
        
    </Routes>
  );
}

export default App;
