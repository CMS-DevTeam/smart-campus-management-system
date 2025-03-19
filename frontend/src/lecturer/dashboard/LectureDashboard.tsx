import { useState, JSX } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { LayoutDashboard, User, BookOpen, FolderOpen, Bell } from "lucide-react";

// Define types for menu items
interface MenuItem {
  name: string;
  icon: JSX.Element;
}

// Sidebar menu items
const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Assignment", icon: <BookOpen size={18} /> },
  { name: "Resources", icon: <FolderOpen size={18} /> },
];

// Define Sidebar component props
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

// Define Top Navbar Component
interface TopNavbarProps {
  notifications: number;
}

const TopNavbar: React.FC<TopNavbarProps> = ({ notifications }) => {
  return (
    <div className="flex justify-end items-center bg-white p-4 shadow-md fixed top-0 left-0 right-0">
      <div className="flex items-center space-x-4">
        {/* Notification Icon with Badge */}
        <div className="relative cursor-pointer">
          <Bell size={22} />
          {notifications > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {notifications}
            </span>
          )}
        </div>

        {/* User Profile */}
        <div className="flex items-center space-x-2 bg-gray-100 p-2 px-4 rounded-full shadow-md cursor-pointer">
          <User size={18} />
          <span>Vidusha</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [notifications, setNotifications] = useState<number>(3);
  const [activeTab, setActiveTab] = useState<string>("Dashboard");
  const [activeButton, setActiveButton] = useState<string>("");

  return (
    <div className="flex h-screen ">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-6 pt-20 relative">
        <TopNavbar notifications={notifications} />

        {/* Active Tab Section */}
        {activeTab === "Dashboard" && (
          <>
          <h1 className="text-[40px] font-bold">Good Morning</h1>
            <h2 className="text-[20px] font-semibold mb-4">Vidusha Lakshan</h2>

            {/* Dashboard Buttons */}
            <div className="grid gap-4 max-w-[600px]">
              {["Resources", "Schedule", "Event", "Announcement"].map((item) => (
                <button
                  key={item}
                  className={`w-full p-4 rounded-lg shadow-md text-center 
                  ${activeButton === item ? "bg-blue-500 text-white" : "bg-white text-black hover:bg-gray-200"}`}
                  onClick={() => setActiveButton(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Calendar */}
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
          <div className="text-xl font-semibold text-center mt-10">Assignment Section</div>
        )}

        {activeTab === "Resources" && (
          <div className="text-xl font-semibold text-center mt-10">Resources Section</div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
