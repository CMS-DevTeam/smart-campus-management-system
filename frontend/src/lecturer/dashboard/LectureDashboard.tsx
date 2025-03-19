import { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import {
    User,
    BookOpen,
    CalendarDays,
    Megaphone,
    FolderOpen,
    BarChart,
  } from "lucide-react";

  const menuItems = [
    { name: "Student", icon: <User size={18} /> },
    { name: "Courses", icon: <BookOpen size={18} /> },
    { name: "Events", icon: <CalendarDays size={18} /> },
    { name: "Announcements", icon: <Megaphone size={18} /> },
    { name: "Resources", icon: <FolderOpen size={18} /> },
    { name: "Report", icon: <BarChart size={18} /> },
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

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-6 relative">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Good Morning</h1>
          <div className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer">
            <User size={18} />
            <span>Chamara</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-4">Vidusha Lakshan</h2>

        <div className="grid grid-cols-2 gap-4 max-w-md">
          {["Resources", "Schedule", "Event", "Announcement"].map((item) => (
            <button
              key={item}
              className="w-full bg-white text-black p-4 rounded-lg shadow-md text-center hover:bg-gray-200"
            >
              {item}
            </button>
          ))}
        </div>

        <div className="absolute right-10 top-20 bg-white p-6 rounded-lg shadow-lg">
          <Calendar
            // onChange={(value: Date) => setDate(value)}
            value={date}
            className="p-2 border-none"
            tileClassName={({ date, view }) =>
              view === "month" && date.toDateString() === new Date().toDateString()
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