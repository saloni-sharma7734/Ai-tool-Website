import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import "./App.css";
import Header from './components/header';
import Home from './components/Home';
import AIcategeory from './components/aicategeory';
import WriteMeAI from './components/writemeai';
import LoginForm from './components/login';

// import Header from "./components/header";
// import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/header" element={<Header />} />
          <Route path="/aicategeory" element={<AIcategeory />} />
          <Route path="/writemeai" element={<WriteMeAI />} />
          <Route path="/login" element={<LoginForm />} />

        </Routes>
   
    </BrowserRouter>
  );
}

export default App;
