// import { useEffect, useState } from "react";
// import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
// import Courses from '@mui/icons-material/CastForEducationRounded';
// import Events from '@mui/icons-material/DateRangeRounded';
// import Announcement from '@mui/icons-material/CampaignRounded';
// import AddAdmin from "../components/forms/AddAdmin";
// import AddStudent from "../components/forms/AddStudent";
// import AddLecturer from "../components/forms/AddLecturer";
// import AddAcademicOfficer from "../components/forms/AddAcademicOfficer";
// import { useModal } from "../../context/ModalContext";
// import axios from "axios";

// const AdminPanel = () => {
//   interface Admin {
//     firstName: string;
//     lastName: string;
//     email: string;
//     status: string;
//   }

//   const [admins, setAdmins] = useState<Admin[]>([]);
//   const [selectedRole, setSelectedRole] = useState("Admin");
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     window.location.href = "/login";
//   };

//   useEffect(() => {
//       const fetchAdmins = async () => {
//         try {
//           const response = await axios.get("http://localhost:5000/api/administrator");
//           setAdmins(response.data.data);
//         } catch (error) {
//           console.error("Error fetching administrators:", error);
//         }
//       };

//       fetchAdmins();
//     }, []);

//   const { openModal } = useModal();

//   const renderDropdown = () => {
//     return (
//       <>
//         {isOpen && (
//           <div className="absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <button
//                 className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 My Account
//               </button>
//               <button
//                 className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   };

//   const handleRoleChange = (e:any) => {
//     setSelectedRole(e.target.value);
//   };

//   const getModalContent = () => {
//     switch (selectedRole) {
//       case "Admin":
//         return <AddAdmin />;
//       case "Student":
//         return <AddStudent />;
//       case "Lecturer":
//         return <AddLecturer />;
//       case "AcademicOfficer":
//         return <AddAcademicOfficer />;
//       default:
//         return <AddStudent />;
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       <aside className="w-64 bg-gray-900 text-white p-4">
//         <div className="flex items-center justify-left mb-6">
//           <img src="images/logo.png" alt="Logo" className="w-auto h-10" />
//         </div>
//         <nav className="space-y-4">
//           <NavItem icon={<User size={18} />} text="Users" active />
//           <NavItem icon={<Courses />} text="Courses" />
//           <NavItem icon={<Events />} text="Events" />
//           <NavItem icon={<Announcement />} text="Announcements" />
//           <NavItem icon={<Search size={18} />} text="Resources" />
//         </nav>
//       </aside>

//       <div className="flex-1 bg-gray-100 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <button className="flex items-center text-gray-600 hover:text-gray-900">
//             <ChevronLeft size={24} />
//             <span className="ml-2 text-lg font-semibold">Users</span>
//           </button>
//           <div className="flex items-center space-x-4 relative">
//             <div className="flex items-center space-x-4">
//               <select
//                 value={selectedRole}
//                 onChange={handleRoleChange}
//                 className="p-2 border rounded"
//               >
//                 <option value="Admin">Admin</option>
//                 <option value="Student">Student</option>
//                 <option value="Lecturer">Lecturer</option>
//                 <option value="AcademicOfficer">Academic Officer</option>
//               </select>
//               <button
//                 onClick={() => openModal(getModalContent())}
//                 className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
//               >
//                 <Plus size={18} className="mr-2" /> Add User
//               </button>
//             </div>
//             <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer mr-0">
//               <User size={18} />
//               <span>Chamara</span>
//             </div>
//             {renderDropdown()}
//           </div>
//         </div>

//         {/* Filters */}
//         <div className="flex space-x-4 mb-4">
//           <select className="p-2 border rounded">
//             <option>User role</option>
//             <option value="admin">Admin</option>
//             <option value="student">Student</option>
//           </select>
//           <input type="text" placeholder="Search text" className="p-2 border rounded flex-1" />
//           <button className="bg-[#006489] text-white px-4 py-2 rounded flex items-center">
//             <Search size={18} className="mr-2" /> Search
//           </button>
//         </div>

//         {/* User Table */}
//         <div className="flex-1 bg-gray-100 p-6">
//       <div className="flex justify-between items-center mb-6">
//         <button className="flex items-center text-gray-600 hover:text-gray-900">
//           <ChevronLeft size={24} />
//           <span className="ml-2 text-lg font-semibold">Users</span>
//         </button>
//         <button
//           onClick={() => openModal(<AddAdmin />)}
//           className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
//         >
//           <Plus size={18} className="mr-2" /> Add Administrator
//         </button>
//       </div>

//       {/* Table */}
//       <div className="bg-white shadow-md rounded-lg overflow-hidden">
//         <table className="w-full text-left border-collapse">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="p-3">First Name</th>
//               <th className="p-3">Last Name</th>
//               <th className="p-3">Email</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {admins.map((admin, index) => (
//               <tr key={index} className="border-t">
//                 <td className="p-3">{admin.firstName}</td>
//                 <td className="p-3">{admin.lastName}</td>
//                 <td className="p-3">{admin.email}</td>
//                 <td className="p-3">{admin.status}</td>
//                 <td className="p-3 flex space-x-2">
//                   <button className="text-[#006489]">
//                     <Pencil size={18} />
//                   </button>
//                   <button className="text-gray-600">
//                     <Eye size={18} />
//                   </button>
//                   <button className="text-red-600">
//                     <Trash size={18} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>

//         {/* Pagination */}
//         <div className="flex justify-end space-x-2 mt-4">
//           <button className="p-2 px-3 bg-gray-200 rounded">&lt;</button>
//           <button className="p-2 px-3 bg-[#006489] text-white rounded">1</button>
//           <button className="p-2 px-3 bg-gray-200 rounded">2</button>
//           <button className="p-2 px-3 bg-gray-200 rounded">3</button>
//           <button className="p-2 px-3 bg-gray-200 rounded">&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const NavItem = ({ icon, text, active }: { icon: React.ReactNode; text: string; active?: boolean }) => {
//   return (
//     <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${active ? "bg-[#006489]" : "hover:bg-gray-800"}`}>
//       {icon}
//       <span>{text}</span>
//     </div>
//   );
// };

// export default AdminPanel;

// import { useEffect, useState } from "react";
// import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
// import Courses from "@mui/icons-material/CastForEducationRounded";
// import Events from "@mui/icons-material/DateRangeRounded";
// import Announcement from "@mui/icons-material/CampaignRounded";
// import AddAdmin from "../components/forms/AddAdmin";
// import AddStudent from "../components/forms/AddStudent";
// import AddLecturer from "../components/forms/AddLecturer";
// import AddAcademicOfficer from "../components/forms/AddAcademicOfficer";
// import { useModal } from "../../context/ModalContext";
// import axios from "axios";

// const roleComponents: Record<string, React.FC> = {
//   Admin: AddAdmin,
//   Student: AddStudent,
//   Lecturer: AddLecturer,
//   AcademicOfficer: AddAcademicOfficer,
// };

// const AdminPanel = () => {
//   interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     status: string;
//   }

//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [selectedRole, setSelectedRole] = useState("Admin");
//   const [searchQuery, setSearchQuery] = useState("");
//   const { openModal } = useModal();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/${selectedRole.toLowerCase()}`);
//         setUsers(response.data.data);
//         setFilteredUsers(response.data.data);
//       } catch (error) {
//         console.error(`Error fetching ${selectedRole} data:`, error);
//       }
//     };

//     fetchData();
//   }, [selectedRole]);

//   useEffect(() => {
//     setFilteredUsers(
//       users.filter(
//         (user) =>
//           user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           user.email.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [searchQuery, users]);

//   const FormComponent = roleComponents[selectedRole] || AddAdmin;

//   return (
//     <div className="flex h-screen">
//       <aside className="w-64 bg-gray-900 text-white p-4">
//         <nav className="space-y-4">
//           <div className="cursor-pointer">Users</div>
//           <div className="cursor-pointer">Courses</div>
//           <div className="cursor-pointer">Events</div>
//           <div className="cursor-pointer">Announcements</div>
//         </nav>
//       </aside>

//       <div className="flex-1 bg-gray-100 p-6">
//         <div className="flex justify-between items-center mb-6 relative">
//           <button className="flex items-center text-gray-600 hover:text-gray-900">
//             <ChevronLeft size={24} />
//             <span className="ml-2 text-lg font-semibold">Users</span>
//           </button>
//           <div className="flex items-center space-x-4">
//             <select
//               value={selectedRole}
//               onChange={(e) => setSelectedRole(e.target.value)}
//               className="p-2 border rounded bg-white shadow-sm cursor-pointer"
//             >
//               {Object.keys(roleComponents).map((role) => (
//                 <option key={role} value={role}>{role}</option>
//               ))}
//             </select>
//             <button
//               onClick={() => openModal(<FormComponent />)}
//               className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
//             >
//               <Plus size={18} className="mr-2" /> Add {selectedRole}
//             </button>
//           </div>
//         </div>

//         <div className="flex space-x-4 mb-4">
//           <input
//             type="text"
//             placeholder="Search users..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="p-2 border rounded flex-1"
//           />
//         </div>

//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="p-3">First Name</th>
//                 <th className="p-3">Last Name</th>
//                 <th className="p-3">Email</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="p-3">{user.firstName}</td>
//                   <td className="p-3">{user.lastName}</td>
//                   <td className="p-3">{user.email}</td>
//                   <td className="p-3">{user.status}</td>
//                   <td className="p-3 flex space-x-2">
//                     <button className="text-blue-500 hover:underline">
//                       <Pencil size={16} />
//                     </button>
//                     <button className="text-green-500 hover:underline">
//                       <Eye size={16} />
//                     </button>
//                     <button className="text-red-500 hover:underline">
//                       <Trash size={16} />
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

// import { useEffect, useState } from "react";
// import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
// import Courses from "@mui/icons-material/CastForEducationRounded";
// import Events from "@mui/icons-material/DateRangeRounded";
// import Announcement from "@mui/icons-material/CampaignRounded";
// import AddAdmin from "../components/forms/AddAdmin";
// import AddStudent from "../components/forms/AddStudent";
// import AddLecturer from "../components/forms/AddLecturer";
// import AddAcademicOfficer from "../components/forms/AddAcademicOfficer";
// import { useModal } from "../../context/ModalContext";
// import axios from "axios";

// const NavItem = ({ icon, text, active }: { icon: React.ReactNode; text: string; active?: boolean }) => {
//   return (
//     <div className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${active ? "bg-[#006489]" : "hover:bg-gray-800"}`}>
//       {icon}
//       <span>{text}</span>
//     </div>
//   );
// };

// const roleComponents: Record<string, React.FC> = {
//   Admin: AddAdmin,
//   Student: AddStudent,
//   Lecturer: AddLecturer,
//   AcademicOfficer: AddAcademicOfficer,
// };

// const AdminPanel = () => {
//   interface User {
//     firstName: string;
//     lastName: string;
//     email: string;
//     status: string;
//   }

//   const [users, setUsers] = useState<User[]>([]);
//   const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
//   const [selectedRole, setSelectedRole] = useState("Admin");
//   const [searchQuery, setSearchQuery] = useState("");
//   const { openModal } = useModal();
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/${selectedRole.toLowerCase()}`);
//         setUsers(response.data.data);
//         setFilteredUsers(response.data.data);
//       } catch (error) {
//         console.error(`Error fetching ${selectedRole} data:`, error);
//       }
//     };

//     fetchData();
//   }, [selectedRole]);

//   useEffect(() => {
//     setFilteredUsers(
//       users.filter(
//         (user) =>
//           user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           user.email.toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [searchQuery, users]);

//   const FormComponent = roleComponents[selectedRole] || AddAdmin;

//   return (
//     <div className="flex h-screen">
//       <aside className="w-64 bg-gray-900 text-white p-4">
//         <div className="flex items-center justify-left mb-6">
//           <img src="images/logo.png" alt="Logo" className="w-auto h-10" />
//         </div>
//         <nav className="space-y-4">
//           <NavItem icon={<User size={18} />} text="Users" active />
//           <NavItem icon={<Courses />} text="Courses" />
//           <NavItem icon={<Events />} text="Events" />
//           <NavItem icon={<Announcement />} text="Announcements" />
//           <NavItem icon={<Search size={18} />} text="Resources" />
//         </nav>
//       </aside>

//       <div className="flex-1 bg-gray-100 p-6">
//         <div className="flex justify-between items-center mb-6 relative">
//           <button className="flex items-center text-gray-600 hover:text-gray-900">
//             <ChevronLeft size={24} />
//             <span className="ml-2 text-lg font-semibold">Users</span>
//           </button>
//           <div className="flex items-center space-x-4 relative">
//             <select
//               value={selectedRole}
//               onChange={(e) => setSelectedRole(e.target.value)}
//               className="p-2 border rounded bg-white shadow-sm cursor-pointer"
//             >
//               {Object.keys(roleComponents).map((role) => (
//                 <option key={role} value={role}>{role}</option>
//               ))}
//             </select>
//             <button
//               onClick={() => openModal(<FormComponent />)}
//               className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
//             >
//               <Plus size={18} className="mr-2" /> Add {selectedRole}
//             </button>
//             <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer mr-0">
//               <User size={18} />
//               <span>Chamara</span>
//             </div>
//             {isOpen && (
//               <div className="absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                 <div className="py-1">
//                   <button className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                     My Account
//                   </button>
//                   <button className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => {
//                     localStorage.removeItem("authToken");
//                     window.location.href = "/login";
//                   }}>
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="flex space-x-4 mb-4">
//           <input
//             type="text"
//             placeholder="Search users..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="p-2 border rounded flex-1"
//           />
//           <button className="bg-[#006489] text-white px-4 py-2 rounded flex items-center">
//             <Search size={18} className="mr-2" /> Search
//           </button>
//         </div>

//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <table className="w-full text-left border-collapse">
//             <thead className="bg-gray-200">
//               <tr>
//                 <th className="p-3">First Name</th>
//                 <th className="p-3">Last Name</th>
//                 <th className="p-3">Email</th>
//                 <th className="p-3">Status</th>
//                 <th className="p-3">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((user, index) => (
//                 <tr key={index} className="border-t">
//                   <td className="p-3">{user.firstName}</td>
//                   <td className="p-3">{user.lastName}</td>
//                   <td className="p-3">{user.email}</td>
//                   <td className="p-3">{user.status}</td>
//                   <td className="p-3 flex space-x-2">
//                     <button className="text-blue-500 hover:underline"><Pencil size={16} /></button>
//                     <button className="text-green-500 hover:underline"><Eye size={16} /></button>
//                     <button className="text-red-500 hover:underline"><Trash size={16} /></button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;

import { useEffect, useState } from "react";
import {
  Search,
  Pencil,
  Eye,
  Trash,
  ChevronLeft,
  User,
  Plus,
} from "lucide-react";
import Courses from "@mui/icons-material/CastForEducationRounded";
import Events from "@mui/icons-material/DateRangeRounded";
import Announcement from "@mui/icons-material/CampaignRounded";
import AddAdmin from "../components/forms/AddAdmin";
import AddStudent from "../components/forms/AddStudent";
import AddLecturer from "../components/forms/AddLecturer";
import AddAcademicOfficer from "../components/forms/AddAcademicOfficer";
import { useModal } from "../../context/ModalContext";
import axios from "axios";

const NavItem = ({
  icon,
  text,
  active,
}: {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}) => {
  return (
    <div
      className={`flex items-center space-x-2 p-2 rounded cursor-pointer ${
        active ? "bg-[#006489]" : "hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};

const roleComponents: Record<string, React.FC> = {
  Admin: AddAdmin,
  Student: AddStudent,
  Lecturer: AddLecturer,
  AcademicOfficer: AddAcademicOfficer,
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
  const [isLoading, setIsLoading] = useState(false); // 🔹 Added loading state
  const { openModal } = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true); // Start loading
      try {
        const response = await axios.get(
          `http://localhost:5000/api/${selectedRole.toLowerCase()}`
        );
        setUsers(response.data.data);
        setFilteredUsers(response.data.data);
      } catch (error) {
        console.error(`Error fetching ${selectedRole} data:`, error);
      } finally {
        setIsLoading(false); // Stop loading
      }
    };

    fetchData();
  }, [selectedRole]);

  useEffect(() => {
    setFilteredUsers(
      users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, users]);

  const FormComponent = roleComponents[selectedRole] || AddAdmin;

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
          <div className="flex items-center space-x-4 relative">
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="p-2 border rounded bg-white shadow-sm cursor-pointer"
            >
              {Object.keys(roleComponents).map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <button
              onClick={() => openModal(<FormComponent />)}
              className="bg-[#006489] cursor-pointer text-white px-4 py-2 rounded flex items-center"
            >
              <Plus size={18} className="mr-2" /> Add {selectedRole}
            </button>
            <div
              onClick={toggleMenu}
              className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer mr-0"
            >
              <User size={18} />
              <span>Chamara</span>
            </div>
            {isOpen && (
              <div className="absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <button className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    My Account
                  </button>
                  <button
                    className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => {
                      localStorage.removeItem("authToken");
                      window.location.href = "/login";
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border rounded flex-1"
          />
          <button className="bg-[#006489] text-white px-4 py-2 rounded flex items-center">
            <Search size={18} className="mr-2" /> Search
          </button>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {isLoading ? ( // Show loading state
            <div className="text-center p-4">Loading...</div>
          ) : (
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
                    <td className="p-3 flex space-x-2">
                      <button className="text-blue-500 hover:underline">
                        <Pencil size={16} />
                      </button>
                      <button className="text-green-500 hover:underline">
                        <Eye size={16} />
                      </button>
                      <button className="text-red-500 hover:underline">
                        <Trash size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        {/* Pagination */}
        <div className="flex justify-end space-x-2 mt-4">
          <button className="p-2 px-3 bg-gray-200 rounded">&lt;</button>
          <button className="p-2 px-3 bg-[#006489] text-white rounded">
            1
          </button>
          <button className="p-2 px-3 bg-gray-200 rounded">2</button>
          <button className="p-2 px-3 bg-gray-200 rounded">3</button>
          <button className="p-2 px-3 bg-gray-200 rounded">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
