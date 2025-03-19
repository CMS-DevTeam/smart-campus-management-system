import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import config from "../../../config";
import { useModal } from "../../../context/ModalContext"

type AddLecturerProps = {
  user?: any;
}

const AddUserForm = ({user}:AddLecturerProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    password: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    nic: "",
    address: "",
    country: "",
    programe: "",
    module: "",
    designation:"",
    academicqualification: "",
    otherqualification: ""
  });

  const {openModal, closeModal} = useModal();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        config.BASE_URL + "/api/lecturer",
        formData
      );
      toast.success("Lecturer added successfully!", {
        position: "top-right", 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log("Lecturer added:", response.data);
    } catch (error) {
      toast.error("Failed to add Lecturer. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("There was an error creating the Lecturer:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <form onSubmit={handleOnSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/** First Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Last Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/** Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Date of Birth */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** NIC */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              NIC
            </label>
            <input
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Address */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/** Country */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Country</option>
              <option value="srilanka">Sri lanka</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
            </select>
          </div>

          {/** Programme */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Programme
            </label>
            <select
              name="programe"
              value={formData.programe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Programme</option>
              <option value="cse">
                Computer Science in Software Engineering
              </option>
              <option value="cs">Computer Science</option>
              <option value="it">Information Technology</option>
              <option value="se">Software Engineering</option>
            </select>
          </div>

          {/** Module */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Module
            </label>
            <select
              name="module"
              value={formData.module}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Module</option>
              <option value="Module 1">Module 1</option>
              <option value="Module 2">Module 2</option>
            </select>
          </div>

          {/** Designation */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Designation
            </label>
            <input
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/** Academic Qualifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Academic Qualifications
            </label>
            <textarea
              name="academicqualification"
              value={formData.academicqualification}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>

          {/** Other Qualifications */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Other Qualifications
            </label>
            <textarea
              name="otherqualification"
              value={formData.otherqualification}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="absolute w-full bottom-0 flex gap-2 justify-end">
          <button
            onClick={closeModal}
            className="cursor-pointer px-4 py-2 text-sky-800 bg-white rounded-md mt-4 border border-sky-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer px-4 py-2 bg-sky-800 text-white rounded-md mt-4"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;