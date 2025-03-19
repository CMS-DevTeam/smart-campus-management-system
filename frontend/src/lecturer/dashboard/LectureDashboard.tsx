import { useState, useEffect, JSX } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  LayoutDashboard,
  User,
  BookOpen,
  FolderOpen,
  Bell,
  Pencil,
  Eye,
  Trash2,
} from "lucide-react";
import AddAssignmentPopup from "../components/AddAssignment";
import axios from "axios";

interface MenuItem {
  name: string;
  icon: JSX.Element;
}

interface Assignment {
  _id: string; 
  name: string; 
  module: string; 
  course: string; 
  dueDate: string; 
  status: string; 
}

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Assignment", icon: <BookOpen size={18} /> },
  { name: "Resources", icon: <FolderOpen size={18} /> },
];

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64 bg-black text-white p-4 min-h-screen z-10">
      <div className="flex items-center justify-center mb-6">
        <img src="images/logo.png" alt="Esoft Logo" className="w-auto h-10" />
      </div>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={`flex items-center space-x-2 p-2 cursor-pointer rounded
            ${activeTab === item.name ? "bg-blue-500" : "hover:bg-gray-700"}`}
            onClick={() => setActiveTab(item.name)}
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

interface TopNavbarProps {
  notifications: number;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ notifications }) => {
  return (
    <div className="flex justify-end items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-4">
        <div className="relative cursor-pointer">
          <Bell size={22} />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {notifications}
            </span>
          )}
        </div>

        <div className="flex items-center space-x-2 bg-gray-100 p-2 px-4 rounded-full shadow-md cursor-pointer">
          <User size={18} />
          <span>Vidusha</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 4;
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [refreshKey, setRefreshKey] = useState<number>(0); 

  const [date, setDate] = useState<Date>(new Date());
  const [notifications, setNotifications] = useState<number>(3);
  const [activeTab, setActiveTab] = useState<string>("Dashboard");
  const [activeButton, setActiveButton] = useState<string>("");

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/assignment");
        console.log("API Response:", response.data);

        const transformedData = response.data.data.map((item: any) => ({
          _id: item._id,
          name: item.assignmentName, 
          module: item.moduleDate, 
          course: item.courseName, 
          dueDate: item.dueDate,
          status: "Active", 
        }));

        setAssignments(transformedData); 
      } catch (error) {
        console.error("Error fetching assignments:", error);
      }
    };
    fetchAssignments();
  }, [refreshKey]);


  const filteredAssignments = Array.isArray(assignments)
  ? assignments.filter((assignment) =>
      assignment.name.toLowerCase().includes(searchText.toLowerCase())
    )
  : [];

  const totalPages = Math.ceil(filteredAssignments.length / itemsPerPage);
  const displayedAssignments = filteredAssignments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const refreshData = () => {
    setRefreshKey((prevKey) => prevKey + 1); 
  };

  return (
    <div className="flex h-screen ">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 bg-gray-100 p-6 pt-20 relative">
        <TopNavbar notifications={notifications} />

        {activeTab === "Dashboard" && (
          <>
            <h1 className="text-[40px] font-bold">Good Morning</h1>
            <h2 className="text-[20px] font-semibold mb-4">Vidusha Lakshan</h2>

            <div className="grid gap-4 max-w-[600px]">
              {["Resources", "Schedule", "Event", "Announcement"].map(
                (item) => (
                  <button
                    key={item}
                    className={`w-full p-4 rounded-lg shadow-md text-center
                  ${
                    activeButton === item
                      ? "bg-blue-500 text-white"
                      : "bg-white text-black hover:bg-gray-200"
                    }`}
                    onClick={() => setActiveButton(item)}
                  >
                    {item}
                  </button>
                )
              )}
            </div>

            <div className="absolute right-10 top-20 bg-white p-6 rounded-lg shadow-lg">
              <Calendar
                value={date}
                className="p-2 border-none"
                tileClassName={({ date, view }) =>
                  view === "month" &&
                  date.toDateString() === new Date().toDateString()
                    ? "bg-blue-500 text-white rounded-lg"
                    : "hover:bg-gray-200 rounded-lg p-1"
                }
              />
            </div>
          </>
        )}

        {activeTab === "Assignment" && (
          <div className="p-6 bg-gray-100 min-h-screen">
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Search text"
                  className="p-2 border border-gray-300 rounded-md"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer">
                  Search
                </button>
              </div>
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer"
                onClick={() => setIsAddModalOpen(true)}
              >
                Add Assignment
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-200 text-left">
                    <th className="p-3">Assignment Name</th>
                    <th className="p-3">Module Date</th>
                    <th className="p-3">Course Name</th>
                    <th className="p-3">Due Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {displayedAssignments.map((assignment) => (
                    <tr
                      key={assignment._id}
                      className="border-t hover:bg-gray-100"
                    >
                      <td className="p-3">{assignment.name}</td>
                      <td className="p-3">{assignment.module}</td>
                      <td className="p-3">{assignment.course}</td>
                      <td className="p-3">{assignment.dueDate}</td>
                      <td className="p-3">{assignment.status}</td>
                      <td className="p-3 flex space-x-2">
                        <Pencil
                          size={18}
                          className="text-blue-600 cursor-pointer"
                        />
                        <Eye
                          size={18}
                          className="text-gray-600 cursor-pointer"
                        />
                        <Trash2
                          size={18}
                          className="text-red-600 cursor-pointer"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

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
              <AddAssignmentPopup
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
              />
            </div>
          </div>
        )}

        {activeTab === "Resources" && (
          <div className="text-xl font-semibold text-center mt-10">
            Resources Section
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
