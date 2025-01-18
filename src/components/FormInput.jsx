import React from "react";

const FormInput = ({ label, name, type, value, onChange, placeholder }) => (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
  );
  
  export default FormInput;
  