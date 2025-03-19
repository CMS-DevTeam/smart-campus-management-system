import { useState } from "react";
import { Pencil, Eye, Trash2 } from "lucide-react";

interface Assignment {
  id: number;
  name: string;
  module: string;
  course: string;
  dueDate: string;
  status: string;
}

const assignmentsData: Assignment[] = [
  { id: 1, name: "ABC Perera", module: "SDP", course: "Software Engineer", dueDate: "20.03.2025", status: "Active" },
  { id: 2, name: "ABC Perera", module: "SDP", course: "Software Engineer", dueDate: "20.03.2025", status: "Active" },
  { id: 3, name: "ABC Pererat", module: "SDP", course: "Software Engineer", dueDate: "20.03.2025", status: "Active" },
  { id: 4, name: "ABC Perera", module: "SDP", course: "Software Engineer", dueDate: "20.03.2025", status: "Active" },
];

const AssignmentTable: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [assignments, setAssignments] = useState<Assignment[]>(assignmentsData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;

  const filteredAssignments = assignments.filter((assignment) =>
    assignment.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAssignments.length / itemsPerPage);
  const displayedAssignments = filteredAssignments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Top Section */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search text"
            className="p-2 border border-gray-300 rounded-md"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Search</button>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>From</option>
          </select>
          <select className="p-2 border border-gray-300 rounded-md">
            <option>To</option>
          </select>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md">Add Assignment</button>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Assignment</th>
              <th className="p-3">Module</th>
              <th className="p-3">Course Name</th>
              <th className="p-3">Due Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedAssignments.map((assignment) => (
              <tr key={assignment.id} className="border-t hover:bg-gray-100">
                <td className="p-3">{assignment.name}</td>
                <td className="p-3">{assignment.module}</td>
                <td className="p-3">{assignment.course}</td>
                <td className="p-3">{assignment.dueDate}</td>
                <td className="p-3">{assignment.status}</td>
                <td className="p-3 flex space-x-2">
                  <Pencil size={18} className="text-blue-600 cursor-pointer" />
                  <Eye size={18} className="text-gray-600 cursor-pointer" />
                  <Trash2 size={18} className="text-red-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="flex justify-end mt-4 space-x-2">
        <button
          className="px-3 py-1 border rounded-md"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 border rounded-md ${
              currentPage === index + 1 ? "bg-blue-600 text-white" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 border rounded-md"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default AssignmentTable;
