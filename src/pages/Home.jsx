import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Welcome to Lifestyle Tracker</h1>
      <p className="mt-4">Track your lifestyle habits to reduce myopia risk.</p>
      <div className="mt-6">
        <Link to="/form" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Go to Lifestyle Form
        </Link>
      </div>
    </div>
  );
};

export default Home;
