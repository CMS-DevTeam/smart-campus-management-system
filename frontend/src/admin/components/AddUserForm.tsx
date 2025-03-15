import React, { useState } from 'react';

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dobDay: '',
    dobMonth: '',
    dobYear: '',
    email: '',
    password: '',
    nic: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    cityState: '',
    country: '',
    guardian: '',
    guardianPhone: '',
    userRole: '',
    program: '',
    optionalModule: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Add User</h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
            <div className="flex space-x-2">
              <input
                type="number"
                name="dobDay"
                value={formData.dobDay}
                onChange={handleChange}
                placeholder="Day"
                className="p-2 w-1/3 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                name="dobMonth"
                value={formData.dobMonth}
                onChange={handleChange}
                placeholder="Month"
                className="p-2 w-1/3 border border-gray-300 rounded-md"
              />
              <input
                type="number"
                name="dobYear"
                value={formData.dobYear}
                onChange={handleChange}
                placeholder="Year"
                className="p-2 w-1/3 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">NIC</label>
          <input
            type="text"
            name="nic"
            value={formData.nic}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City/State</label>
          <input
            type="text"
            name="cityState"
            value={formData.cityState}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Country</option>
            {/* Add country options here */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Guardian</label>
          <input
            type="text"
            name="guardian"
            value={formData.guardian}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Guardian's Phone Number</label>
          <input
            type="text"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">User Role</label>
          <select
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select User Role</option>
            {/* Add user role options here */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Programme</label>
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Programme</option>
            {/* Add program options here */}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Optional Module</label>
          <select
            name="optionalModule"
            value={formData.optionalModule}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Optional Module</option>
            {/* Add module options here */}
          </select>
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            className="py-2 px-4 bg-gray-300 rounded-md text-sm font-medium text-gray-700"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-600 rounded-md text-sm font-medium text-white"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserForm;
