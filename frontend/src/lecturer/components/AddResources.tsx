import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AddAssignmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddAssignmentPopup: React.FC<AddAssignmentProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    assignmentName: "",
    courseName: "",
    moduleDate: "",
    dueDate: "",
    description: "",
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/assignment", formData);
      toast.success("Assignment added successfully!");
      onClose(); // Close modal after submission
    } catch (error) {
      toast.error("Failed to add assignment. Please try again.");
      console.error("Error adding assignment:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50 b border-black rounded z-50">
      <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">Add Assignment</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">&times;</button>
        </div>

        <form onSubmit={handleOnSubmit} className="mt-4 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Assignment Name</label>
              <input
                type="text"
                name="assignmentName"
                value={formData.assignmentName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Course Name</label>
              <select
                name="courseName"
                value={formData.courseName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              >
                <option value="">Select Course</option>
                <option value="KU Topup">KU Topup</option>
                <option value="CS">Computer Science</option>
                <option value="IT">Information Technology</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Module Date</label>
              <input
                type="date"
                name="moduleDate"
                value={formData.moduleDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Due Date</label>
              <input
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md h-20"
              required
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md">
              Close
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAssignmentPopup;
