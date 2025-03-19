const StudentDetails = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white w-1/2 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Student Details</h2>
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <button className="bg-blue-500 text-white px-3 py-1 rounded">Update Profile Image</button>
      </div>
      <div className="mt-4">
        <p><strong>Name:</strong> John Doe</p>
        <p><strong>Address:</strong> 123 Street, City</p>
        <p><strong>Birthday:</strong> 01/01/2000</p>
        <p><strong>Contact No:</strong> +1234567890</p>
        <p><strong>Email:</strong> johndoe@example.com</p>
        <p><strong>Course Name:</strong> Computer Science</p>
      </div>
      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Update</button>
      <button onClick={onBack} className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded">
        Back
      </button>
    </div>
  );
};
export default StudentDetails;