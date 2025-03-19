import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
const LectureMaterials: React.FC = () => {
    const navigate = useNavigate();
    return (
      <div className="p-6">
        <h2 className="text-lg font-semibold">Lecture Materials</h2>
        <div className="mt-4 space-y-3">
          {["Material 1", "Material 2", "Material 3"].map((title, index) => (
            <div key={index} className="flex items-center gap-2">
              <input type="text" value={title} className="border rounded-lg flex-1 p-2" disabled />
              <button onClick={() => navigate("/assignments")} className="bg-teal-700 text-white px-4 py-2 rounded-lg">View</button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default LectureMaterials;