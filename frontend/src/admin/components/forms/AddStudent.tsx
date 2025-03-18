import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import InputField from '@components/input';
import SelectField from '@components/select';

const AddUserForm = () => {
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
    programme: "",
    optionalModule: "",
    guardian: "",
    immediateContactNumber: "",
    relationship: "",
  });

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/student",
        formData
      );
      toast.success("student added successfully!", {
        position: "top-right", 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      console.log("student added:", response.data);
    } catch (error) {
      toast.error("Failed to add student. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.error("There was an error creating the student:", error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Add Student</h2>
      <form onSubmit={handleOnSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* First Name */}
        <InputField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          type="text"
          required
        />

        {/* Last Name */}
        <InputField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          type="text"
          required
        />

        {/* Gender */}
        <SelectField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          options={[
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
          ]}
          required
        />

        {/* Password */}
        <InputField
          label="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          type="password"
          required
        />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          type="tel"
          required
        />

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          required
        />

        {/* Date of Birth */}
        <InputField
          label="Date of Birth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          type="date"
          required
        />

        {/* NIC */}
        <InputField
          label="NIC"
          name="nic"
          value={formData.nic}
          onChange={handleChange}
          type="text"
          required
        />

        {/* Address */}
        <InputField
          label="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
          required
        />

        {/* Country */}
        <SelectField
          label="Country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          options={[
            { value: 'srilanka', label: 'Sri Lanka' },
            { value: 'india', label: 'India' },
            { value: 'uk', label: 'UK' },
          ]}
          required
        />

          {/** Role */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Lecturer">Lecturer</option>
              <option value="Admin">Admin</option>
            </select>
          </div> */}

        {/* Programme */}
        <SelectField
          label="Programme"
          name="programme"
          value={formData.programme}
          onChange={handleChange}
          options={[
            { value: 'cse', label: 'Computer Science in Software Engineering' },
            { value: 'cs', label: 'Computer Science' },
            { value: 'it', label: 'Information Technology' },
            { value: 'se', label: 'Software Engineering' },
          ]}
          required
        />

        {/* Optional Module */}
        <SelectField
          label="Optional Module"
          name="optionalModule"
          value={formData.optionalModule}
          onChange={handleChange}
          options={[{ value: 'mobile', label: 'Mobile' }]}
          required
        />

        {/* Guardian */}
        <InputField
          label="Guardian"
          name="guardian"
          value={formData.guardian}
          onChange={handleChange}
          type="text"
        />

        {/* Immediate Contact Number */}
        <InputField
          label="Immediate Contact Number"
          name="immediateContactNumber"
          value={formData.immediateContactNumber}
          onChange={handleChange}
          type="tel"
        />

        {/* Relationship */}
        <InputField
          label="Relationship"
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          type="text"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4"
      >
        Add Student
      </button>
    </form>
    </div>
  );
};

export default AddUserForm;