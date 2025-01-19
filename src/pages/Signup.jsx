import React from "react";

const Signup = () => {
  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold">Signup</h1>
      <form className="flex flex-col gap-4 items-center mt-4">
        <input type="text" placeholder="Name" className="border p-2" />
        <input type="email" placeholder="Email" className="border p-2" />
        <input type="password" placeholder="Password" className="border p-2" />
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
