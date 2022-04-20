import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Contato from "./pages/Contato/Contato.jsx";
import PaginaDeErro from "./components/PaginaDeErro/PaginaDeErro.jsx";
import Home from "./pages/Home/Home.jsx";
import Visualizar from "./components/Visualizar/Visualizar";
import Sucesso from "./pages/AtualizacaoSucedida/Sucesso";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/visualizar/:id" element={<Visualizar />} />
          <Route path="/atualizacaoSucedida" element={<Sucesso />} />
          <Route path="*" element={<PaginaDeErro />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
