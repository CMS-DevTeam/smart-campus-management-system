<<<<<<< HEAD
// import React, { useState } from 'react';

// const AddUserForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     gender: '',
//     dobDay: '',
//     dobMonth: '',
//     dobYear: '',
//     email: '',
//     password: '',
//     nic: '',
//     phoneNumber: '',
//     addressLine1: '',
//     addressLine2: '',
//     cityState: '',
//     country: '',
//     guardian: '',
//     guardianPhone: '',
//     userRole: '',
//     program: '',
//     optionalModule: ''
//   });

//   const handleChange = (e:any) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e:any) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-semibold">Add User</h2>
//       </div>
//       <form onSubmit={handleSubmit} className="space-y-4 mt-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">First Name</label>
//             <input
//               type="text"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Last Name</label>
//             <input
//               type="text"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Gender</label>
//             <input
//               type="text"
//               name="gender"
//               value={formData.gender}
//               onChange={handleChange}
//               className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             />
//           </div>
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
//             <div className="flex space-x-2">
//               <input
//                 type="number"
//                 name="dobDay"
//                 value={formData.dobDay}
//                 onChange={handleChange}
//                 placeholder="Day"
//                 className="p-2 w-1/3 border border-gray-300 rounded-md"
//               />
//               <input
//                 type="number"
//                 name="dobMonth"
//                 value={formData.dobMonth}
//                 onChange={handleChange}
//                 placeholder="Month"
//                 className="p-2 w-1/3 border border-gray-300 rounded-md"
//               />
//               <input
//                 type="number"
//                 name="dobYear"
//                 value={formData.dobYear}
//                 onChange={handleChange}
//                 placeholder="Year"
//                 className="p-2 w-1/3 border border-gray-300 rounded-md"
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">NIC</label>
//           <input
//             type="text"
//             name="nic"
//             value={formData.nic}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//           <input
//             type="text"
//             name="phoneNumber"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Address Line 1</label>
//           <input
//             type="text"
//             name="addressLine1"
//             value={formData.addressLine1}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Address Line 2</label>
//           <input
//             type="text"
//             name="addressLine2"
//             value={formData.addressLine2}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">City/State</label>
//           <input
//             type="text"
//             name="cityState"
//             value={formData.cityState}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Country</label>
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Select Country</option>
//             {/* Add country options here */}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Guardian</label>
//           <input
//             type="text"
//             name="guardian"
//             value={formData.guardian}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Guardian's Phone Number</label>
//           <input
//             type="text"
//             name="guardianPhone"
//             value={formData.guardianPhone}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">User Role</label>
//           <select
//             name="userRole"
//             value={formData.userRole}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Student</option>
//             <option value="">Lecturer</option>
//             <option value="">Admin</option>
//             <option value="">Academic Officer</option>
//             {/* Add user role options here */}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Programme</label>
//           <select
//             name="program"
//             value={formData.program}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Computer Science in software Engineering</option>
//             {/* Add program options here */}
//           </select>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">Optional Module</label>
//           <select
//             name="optionalModule"
//             value={formData.optionalModule}
//             onChange={handleChange}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//           >
//             <option value="">Mobile</option>
//             <option value="">Advance Data Modelin</option>

//           </select>
//         </div>

//         <div className="flex justify-between mt-6">
//           <button
//             type="button"
//             className="py-2 px-4 bg-gray-300 rounded-md text-sm font-medium text-gray-700"
//           >
//             Cancel
//           </button>
//           <button
//             type="submit"
//             className="py-2 px-4 bg-blue-600 rounded-md text-sm font-medium text-white"
//           >
//             Add User
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddUserForm;

import React, { useState } from 'react';
import axios from 'axios';
import { set } from 'mongoose';
import e from 'express';
=======
import React, { useState } from 'react';
>>>>>>> origin/main

const AddUserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
<<<<<<< HEAD
    password: '',
    phoneNumber: '',
    email: '',
    dateOfBirth: '',
    nic: '',
    address: '',
    country: '',
    role: '',
    programme: '',
    optionalModule: '',
    guardian: '',
    immediateContactNumber: '',
    relationship: ''
  });

  const handleOnSubmit = async (e:any) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/student', formData)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('There was an error creating the student:', error);
    } );
  }

  // const handleChange = (e:any) => {
  //   const { name, value } = e.target;
  //   console.log(`Field: ${name}, Value: ${value}`); // Debugging: Log the field and value
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = async (e:any) => {
  //   e.preventDefault();
  //   console.log('Form submitted'); // Debugging: Check if the function is called

  //   // Validate required fields
  //   if (
  //     !formData.firstName ||
  //     !formData.lastName ||
  //     !formData.gender ||
  //     !formData.dateOfBirth ||
  //     !formData.email ||
  //     !formData.password ||
  //     !formData.nic ||
  //     !formData.phoneNumber ||
  //     !formData.address ||
  //     !formData.country ||
  //     !formData.role ||
  //     !formData.programme ||
  //     !formData.optionalModule ||
  //     !formData.immediateContactNumber
  //   ) {
  //     alert('Please fill all required fields.');
  //     return;
  //   }

  //   // Prepare the data to be sent to the backend
  //   const studentData = {
  //     firstName: formData.firstName,
  //     lastName: formData.lastName,
  //     gender: formData.gender,
  //     password: formData.password,
  //     phoneNumber: formData.phoneNumber,
  //     email: formData.email,
  //     dateOfBirth: new Date(formData.dateOfBirth),
  //     nic: formData.nic,
  //     address: formData.address,
  //     country: formData.country,
  //     role: formData.role,
  //     programme: formData.programme,
  //     optionalModule: formData.optionalModule,
  //     guardian: formData.guardian,
  //     immediateContactNumber: formData.immediateContactNumber,
  //     relationship: formData.relationship
  //   };

  //   console.log('Sending data to backend:', studentData); // Debugging: Log the data

  //   try {
  //     const response = await axios.post('http://localhost:5000/api/student', studentData);
  //     console.log('Student created successfully:', response.data); // Debugging: Log the response

  //     // Show success message
  //     alert('User added successfully!');

  //     // Reset the form
  //     setFormData({
  //       firstName: '',
  //       lastName: '',
  //       gender: '',
  //       password: '',
  //       phoneNumber: '',
  //       email: '',
  //       dateOfBirth: '',
  //       nic: '',
  //       address: '',
  //       country: '',
  //       role: '',
  //       programme: '',
  //       optionalModule: '',
  //       guardian: '',
  //       immediateContactNumber: '',
  //       relationship: ''
  //     });
  //   } catch (error) {
  //     console.error('There was an error creating the student:', error); // Debugging: Log the error

  //     // Show error message
  //     alert('Failed to add user. Please try again.');
  //   }
=======
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
>>>>>>> origin/main

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Add User</h2>
      </div>
<<<<<<< HEAD
      <form onSubmit={handleOnSubmit} className="space-y-4 mt-4">
=======
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
>>>>>>> origin/main
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
<<<<<<< HEAD
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
=======
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
<<<<<<< HEAD
              onChange={e => setFormData({ ...formData, lastName: e.target.value })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
=======
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Gender</label>
            <input
              type="text"
              name="gender"
<<<<<<< HEAD
              onChange={e => setFormData({ ...formData,gender: e.target.value })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
=======
              value={formData.gender}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
<<<<<<< HEAD
            <input
              type="date"
              name="dateOfBirth"
              onChange={e => setFormData({ ...formData, dateOfBirth: e.target.value })}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
=======
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
>>>>>>> origin/main
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
<<<<<<< HEAD
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
=======
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <input
<<<<<<< HEAD
            type="text"
            name="password"
            onChange={e => setFormData({ ...formData, password: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
=======
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">NIC</label>
          <input
            type="text"
            name="nic"
<<<<<<< HEAD
            onChange={e => setFormData({ ...formData, nic: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
=======
            value={formData.nic}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
<<<<<<< HEAD
            onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
=======
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
>>>>>>> origin/main
          />
        </div>

        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            name="address"
            onChange={e => setFormData({ ...formData, address: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
=======
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
>>>>>>> origin/main
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            name="country"
<<<<<<< HEAD
            onChange={e => setFormData({ ...formData, country: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Country</option>
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
=======
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Country</option>
            {/* Add country options here */}
>>>>>>> origin/main
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Guardian</label>
          <input
            type="text"
            name="guardian"
<<<<<<< HEAD
            onChange={e => setFormData({ ...formData, guardian: e.target.value })}
=======
            value={formData.guardian}
            onChange={handleChange}
>>>>>>> origin/main
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium text-gray-700">Immediate Contact Number</label>
          <input
            type="text"
            name="immediateContactNumber"
            onChange={e => setFormData({ ...formData, immediateContactNumber: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Relationship</label>
          <input
            type="text"
            name="relationship"
            onChange={e => setFormData({ ...formData, relationship: e.target.value })}
=======
          <label className="block text-sm font-medium text-gray-700">Guardian's Phone Number</label>
          <input
            type="text"
            name="guardianPhone"
            value={formData.guardianPhone}
            onChange={handleChange}
>>>>>>> origin/main
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">User Role</label>
          <select
<<<<<<< HEAD
            name="role"
            onChange={e => setFormData({ ...formData, role: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Lecturer">Lecturer</option>
            <option value="Admin">Admin</option>
            <option value="Academic Officer">Academic Officer</option>
=======
            name="userRole"
            value={formData.userRole}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select User Role</option>
            {/* Add user role options here */}
>>>>>>> origin/main
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Programme</label>
          <select
<<<<<<< HEAD
            name="programme"
            onChange={e => setFormData({ ...formData, programme: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Programme</option>
            <option value="Computer Science in Software Engineering">
              Computer Science in Software Engineering
            </option>
=======
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Programme</option>
            {/* Add program options here */}
>>>>>>> origin/main
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Optional Module</label>
          <select
            name="optionalModule"
<<<<<<< HEAD
            onChange={e => setFormData({ ...formData, optionalModule: e.target.value })}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Module</option>
            <option value="Mobile">Mobile</option>
            <option value="Advance Data Modeling">Advance Data Modeling</option>
=======
            value={formData.optionalModule}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
          >
            <option value="">Select Optional Module</option>
            {/* Add module options here */}
>>>>>>> origin/main
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

<<<<<<< HEAD
export default AddUserForm;
=======
export default AddUserForm;
>>>>>>> origin/main
