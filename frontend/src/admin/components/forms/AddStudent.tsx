import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Input from '@components/input';
import Select from '@components/select';

import config from "../../../config";
import { useModal } from '../../../context/ModalContext';

type AddStudentProps = {
  user?: any;
}

const AddUserForm = ({user} : AddStudentProps) => {
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

  const { closeModal } = useModal();

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        config.BASE_URL + "/api/student",
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
      <form onSubmit={handleOnSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="First Name"
          name="firstName"
          value={user? user.firstName : formData.firstName}
          onChange={handleChange}
          type="text"
          required
        />

        <Input
          label="Last Name"
          name="lastName"
          value={user? user.lastName : formData.lastName}
          onChange={handleChange}
          type="text"
          required
        />

        <Select
          label="Gender"
          name="gender"
          value={user? user.gender : formData.gender}
          onChange={handleChange}
          options={[
            { value: 'Male', label: 'Male' },
            { value: 'Female', label: 'Female' },
            { value: 'Other', label: 'Other' },
          ]}
          required
        />

        <Input
          label="Password"
          name="password"
          value={user? user.password : formData.password}
          onChange={handleChange}
          type="password"
          required
        />

        <Input
          label="Phone Number"
          name="phoneNumber"
          value={user? user.phoneNumber : formData.phoneNumber}
          onChange={handleChange}
          type="tel"
          required
        />

        <Input
          label="Email"
          name="email"
          value={user? user.email : formData.email}
          onChange={handleChange}
          type="email"
          required
        />

        <Input
          label="Date of Birth"
          name="dateOfBirth"
          value={user? user.dateOfBirth : formData.dateOfBirth}
          onChange={handleChange}
          type="date"
          required
        />

        <Input
          label="NIC"
          name="nic"
          value={user? user.nic : formData.nic}
          onChange={handleChange}
          type="text"
          required
        />

        <Input
          label="Address"
          name="address"
          value={user? user.address : formData.address}
          onChange={handleChange}
          type="text"
          required
        />

        <Select
          label="Country"
          name="country"
          value={user? user.country : formData.country}
          onChange={handleChange}
          options={[
            { value: 'srilanka', label: 'Sri Lanka' },
            { value: 'india', label: 'India' },
            { value: 'uk', label: 'UK' },
          ]}
          required
        />

        <Select
          label="Programme"
          name="programme"
          value={user? user.programme : formData.programme}
          onChange={handleChange}
          options={[
            { value: 'cse', label: 'Computer Science in Software Engineering' },
            { value: 'cs', label: 'Computer Science' },
            { value: 'it', label: 'Information Technology' },
            { value: 'se', label: 'Software Engineering' },
          ]}
          required
        />

        <Select
          label="Optional Module"
          name="optionalModule"
          value={formData.optionalModule}
          onChange={handleChange}
          options={[{ value: 'mobile', label: 'Mobile' }]}
          required
        />

        <Input
          label="Guardian"
          name="guardian"
          value={user? user.guardian : formData.guardian}
          onChange={handleChange}
          type="text"
        />

        <Input
          label="Immediate Contact Number"
          name="immediateContactNumber"
          value={user? user.immediateContactNumber : formData.immediateContactNumber}
          onChange={handleChange}
          type="tel"
        />

        <Input
          label="Relationship"
          name="relationship"
          value={user? user.relationship : formData.relationship}
          onChange={handleChange}
          type="text"
        />
      </div>

        <div className="flex gap-2 justify-end">
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
            {user ? 'Update': 'Add'}
          </button>
        </div>
    </form>
    </div>
  );
};

export default AddUserForm;