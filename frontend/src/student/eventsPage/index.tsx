import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

const Events: React.FC = () => {
  const navigate = useNavigate();
  const events = [
    { id: 1, title: "Event Details" },
    { id: 2, title: "Event Name" },
  ];

  return (
    <div className="p-6 w-full flex flex-col items-center">
      {events.map((event, index) => (
        <div
          key={event.id}
          className={`border rounded-lg p-6 w-full ${index === 0 ? "h-64" : "h-32"} bg-gray-100 flex justify-between items-center mt-4`}
        >
          <span>{event.title}</span>
          <button
            onClick={() => navigate("/EventForm")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};
export default Events;