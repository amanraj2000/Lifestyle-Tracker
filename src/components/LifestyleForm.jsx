import React, { useState } from "react";
import FormInput from "./FormInput";

const LifestyleForm = () => {
  const [formData, setFormData] = useState({
    screenTime: "",
    outdoorHours: "",
    readingDistance: "",
    posture: "good",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your data has been successfully submitted!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-lg p-6 space-y-4"
    >
      <FormInput
        label="Daily Screen Time (hours)"
        name="screenTime"
        type="number"
        value={formData.screenTime}
        onChange={handleChange}
        placeholder="Enter hours (e.g., 4)"
      />
      <FormInput
        label="Outdoor Activity Hours"
        name="outdoorHours"
        type="number"
        value={formData.outdoorHours}
        onChange={handleChange}
        placeholder="Enter hours (e.g., 2)"
      />
      <FormInput
        label="Reading Distance (cm)"
        name="readingDistance"
        type="number"
        value={formData.readingDistance}
        onChange={handleChange}
        placeholder="Enter distance (e.g., 30)"
      />
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Posture Habits
        </label>
        <select
          name="posture"
          value={formData.posture}
          onChange={handleChange}
          className="w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="good">Good</option>
          <option value="average">Average</option>
          <option value="poor">Poor</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default LifestyleForm;
