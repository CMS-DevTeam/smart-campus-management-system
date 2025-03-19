import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
  LayoutDashboard,
  User,
  BookOpen,
  FolderOpen,
  Bell,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", icon: <LayoutDashboard size={18} /> },
  { name: "Assignment", icon: <BookOpen size={18} /> },
  { name: "Resources", icon: <FolderOpen size={18} /> },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-black text-white p-4 min-h-screen">
      <div className="flex items-center justify-center mb-6">
        <img src="images/logo.png" alt="Esoft Logo" className="w-auto h-10" />
      </div>
      <nav className="space-y-4">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-700 rounded"
          >
            {item.icon}
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [notifications, setNotifications] = useState(3); // Example: 3 unread notifications

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Good Morning</h1>
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
            <div className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer">
              <User size={18} />
              <span>Vidusha</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Vidusha Lakshan</h2>

        <div className="grid  gap-15 max-w-[600px]">
          {["Resources", "Schedule", "Event", "Announcement"].map((item) => (
            <button
              key={item}
              className="w-full bg-white text-black p-4 rounded-lg shadow-md text-center hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Custom Calendar Container */}
        <div className="absolute right-10 top-20 bg-white p-6 rounded-lg shadow-lg">
          <Calendar
            // onChange={setDate}
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
      </main>
    </div>
  );
};

export default Dashboard;
