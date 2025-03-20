import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddResourceProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddResourcePopup: React.FC<AddResourceProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    reservationDate: "",
    reservationTime: "",
    description: "",
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/resources", formData);
      toast.success("resources added successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to add resources. Please try again.");
      console.error("Error adding resources:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 b border-black rounded z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Add Resources</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleOnSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resource category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Category</option>
                <option value="whiteboard"> Whiteboard</option>
                <option value="textbooks">Textbooks</option>
                <option value="microphone">Microphone</option>
                <option value="internet">Internet Access & Wi-Fi </option>
                <option value="headset">Headset & Webcam</option>
                <option value="projector">Projector & Screen</option>
                <option value="visualization">Data Visualization Tools</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Resource Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Reservation Date
              </label>
              <input
                type="date"
                name="reservationDate"
                value={formData.reservationDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Reservation Time
            </label>
            <select
              name="reservationTime"
              value={formData.reservationTime}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Time Want</option>
              <option value="whiteboard">8.30 AM - 10.30 AM</option>
              <option value="textbooks">10.30 AM - 12.30 PM</option>
              <option value="microphone">12.30 PM - 2.30 PM</option>
              <option value="internet">2.30 PM - 4.30 PM</option>
              <option value="headset">4.30 PM - 6.30 PM</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md"
            >
              Close
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md"
            >
              Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddResourcePopup;
