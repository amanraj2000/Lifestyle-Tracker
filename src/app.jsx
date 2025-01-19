import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LifestyleForm from "./components/LifestyleForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stats from "./pages/Stats";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header is always visible */}
        <Header />
        <main className="max-w-4xl mx-auto py-6">
          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/form" element={<LifestyleForm />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/stats" element={<Stats />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
