import React from "react";
import Header from "./components/Header";
import LifestyleForm from "./components/LifestyleForm";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto py-6">
        <LifestyleForm />
      </main>
    </div>
  );
};

export default App;
