import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import "./App.css";
import Header from './components/header';
import Home from './components/Home';
import AIcategeory from './components/aicategeory';
import WriteMeAI from './components/Tools/tool';
import LoginForm from './components/login';
import Category from './components/category';

// import Header from "./components/header";
// import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/aicategory/:id" element={<AIcategeory />} />
          <Route path="/aicategory" element={<AIcategeory />} />
          <Route path="/tool/:id" element={<WriteMeAI />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/category" element={<Category />} />

        </Routes>
   
    </BrowserRouter>
  );
}

export default App;
