import { useState } from "react";
import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
import Courses from '@mui/icons-material/CastForEducationRounded';
import Events from '@mui/icons-material/DateRangeRounded';
import Announcement from '@mui/icons-material/CampaignRounded';
import { useModal } from "../../context/ModalContext";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

const StudentPanel = () => {
const navigate = useNavigate();

  const [courses] = useState([
    { module: "sdp", status: "open", recourses: "view"},
    { module: "sdp", status: "open", recourses: "view"},
    { module: "sdp", status: "open", recourses: "view"},
    { module: "sdp", status: "open", recourses: "view" },

  ]);
  
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const { openModal } = useModal();

  const renderDropdown = () => {
    return (
      <>
        {isOpen && (
          <div className="absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                My Account
              </button>
              <button
                className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </>
    );
  };

  const handleRoleChange = (e:any) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <div className="flex items-center justify-left mb-6">
          <img src="images/logo.png" alt="Logo" className="w-auto h-10" />
        </div>
        <nav className="space-y-4">
            <Link to="/">
            <NavItem icon={<User size={18} />} text="Dashboard" active />
            </Link>
            {/* <Link to="/StudentDashboard"> */}
            <NavItem icon={<Courses />} text="Courses" />
            {/* </Link> */}
          
          <Link to="/Events">
          <NavItem icon={<Events />} text="Events"/>
          </Link>
         
          <NavItem icon={<Announcement />} text="Announcements" />
          <NavItem icon={<Search size={18} />} text="Results" />
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft size={24} />
            <span className="ml-2 text-lg font-semibold">Cources</span>
          </button>
          <div className="flex items-center space-x-4 relative">
            <div className="flex items-center space-x-4">
              {/* <select 
                value={selectedRole} 
                onChange={handleRoleChange} 
                className="p-2 border rounded"
              >
                <option value="Admin">Admin</option>
                <option value="Student">Student</option>
                <option value="Lecturer">Lecturer</option>
                <option value="AcademicOfficer">Academic Officer</option>
              </select> */}
              {/* <button 
                onClick={() => openModal(getModalContent())} 
                className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
              >
                <Plus size={18} className="mr-2" /> Add User
              </button> */}
            </div>
            <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer mr-0">
              <User size={18} />
              <span>Kavindu</span>
            </div>
            {renderDropdown()}
          </div>
        </div>

        {/* Filters */}
        <div className="flex space-x-4 mb-4">
          {/* <select className="p-2 border rounded">
            <option>User role</option>
          </select> */}
          <input type="text" placeholder="Search text" className="p-2 border rounded flex-1" />
          <button className="bg-[#006489] text-white px-4 py-2 rounded flex items-center">
            <Search size={18} className="mr-2" /> Search
          </button>
        </div>

        {/* Cources Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Module</th>
                <th className="p-3">Status</th>
                <th className="p-3">Recourses</th>
                <th className="p-3">Assignment</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((courses, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{courses.module}</td>
                  <td className="p-3">{courses.status}</td>
                  <td className="p-3">{courses.recourses}</td>
                  <td className="p-3">
                  <button onClick={() => navigate("/lecture-materials")} className="bg-blue-600 text-white px-4 py-2 rounded-lg">Open</button>
                  </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="p-2 px-3 bg-gray-200 rounded">&lt;</button>
          <button className="p-2 px-3 bg-[#006489] text-white rounded">1</button>
          <button className="p-2 px-3 bg-gray-200 rounded">2</button>
          <button className="p-2 px-3 bg-gray-200 rounded">3</button>
          <button className="p-2 px-3 bg-gray-200 rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({ icon, text, active }: { icon: React.ReactNode; text: string; active?: boolean }) => {
  return (
    <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${active ? "bg-[#006489]" : "hover:bg-gray-800"}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

export default StudentPanel;
