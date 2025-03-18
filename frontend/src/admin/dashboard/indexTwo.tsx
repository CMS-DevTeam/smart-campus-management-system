import { useEffect, useState } from "react";
import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
import Courses from "@mui/icons-material/CastForEducationRounded";
import Events from "@mui/icons-material/DateRangeRounded";
import Announcement from "@mui/icons-material/CampaignRounded";
import AddAdmin from "../components/forms/AddAdmin";
import AddStudent from "../components/forms/AddStudent";
import AddLecturer from "../components/forms/AddLecturer";
import AddAcademicOfficer from "../components/forms/AddAcademicOfficer";
import { useModal } from "../../context/ModalContext";
import axios from "axios";

const NavItem = ({ icon, text, active }: { icon: React.ReactNode; text: string; active?: boolean }) => {
  return (
    <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${active ? "bg-[#006489]" : "hover:bg-gray-800"}`}>
      {icon}
      <span>{text}</span>
    </div>
  );
};

const AdminPanel = () => {
  interface User {
    firstName: string;
    lastName: string;
    email: string;
    status: string;
  }

  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [selectedRole, setSelectedRole] = useState("Admin");
  const [searchQuery, setSearchQuery] = useState("");
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;
        switch (selectedRole) {
          case "Admin":
            response = await axios.get("http://localhost:5000/api/administrator");
            break;
          case "Student":
            response = await axios.get("http://localhost:5000/api/student");
            break;
          case "Lecturer":
            response = await axios.get("http://localhost:5000/api/lecturer");
            break;
          case "AcademicOfficer":
            response = await axios.get("http://localhost:5000/api/academic-officer");
            break;
          default:
            response = { data: { data: [] } };
        }
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${selectedRole} data:`, error);
      }
    };

    fetchData();
  }, [selectedRole]);

  useEffect(() => {
    const filtered = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchQuery, users]);

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <div className="flex items-center justify-left mb-6">
          <img src="images/logo.png" alt="Logo" className="w-auto h-10" />
        </div>
        <nav className="space-y-4">
          <NavItem icon={<User size={18} />} text="Users" active />
          <NavItem icon={<Courses />} text="Courses" />
          <NavItem icon={<Events />} text="Events" />
          <NavItem icon={<Announcement />} text="Announcements" />
          <NavItem icon={<Search size={18} />} text="Resources" />
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6 relative">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft size={24} />
            <span className="ml-2 text-lg font-semibold">Users</span>
          </button>
          <div className="flex items-center space-x-4">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="p-2 border rounded bg-white shadow-sm cursor-pointer"
            >
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="Lecturer">Lecturer</option>
              <option value="AcademicOfficer">Academic Officer</option>
            </select>
            <button
              onClick={() => openModal(<AddAdmin />)}
              className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
            >
              <Plus size={18} className="mr-2" /> Add {selectedRole}
            </button>
            <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer">
              <User size={18} />
              <span>Chamara</span>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">My Account</button>
                  <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <input type="text" placeholder="Search users..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="p-2 border rounded flex-1" />
          <button className="bg-[#006489] text-white px-4 py-2 rounded flex items-center">
            <Search size={18} className="mr-2" /> Search
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{user.firstName}</td>
                  <td className="p-3">{user.lastName}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

