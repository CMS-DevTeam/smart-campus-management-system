
import { useState, useEffect } from "react";
import { Search, ChevronLeft, User } from "lucide-react";
import CourseImage from '@mui/icons-material/CastForEducationRounded';
import Events from '@mui/icons-material/DateRangeRounded';
import Announcement from '@mui/icons-material/CampaignRounded';
import { Link, useNavigate } from "react-router-dom";
import API from "frontend/src/service/Axios";

const CoursesPage = () => {
  interface Courses {
    module: string;
    status: string;
  }

  const navigate = useNavigate();
  const [courses, setCourses] = useState<Courses[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    API.get("/course")
      .then((response) => {
        if (response.data && Array.isArray(response.data.data)) {
          setCourses(response.data.data);
          setFilteredCourses(response.data.data);
        } else {
          setError("Unexpected data format received.");
          setCourses([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load courses.");
        setCourses([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const results = courses.filter(course =>
      course.module.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(results);
  }, [searchTerm, courses]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-900 text-white p-4">
        <div className="flex items-center justify-left mb-6">
          <img src="images/logo.png" alt="Logo" className="w-auto h-10" />
        </div>
        <nav className="space-y-4">
          <Link to="/student-dashboard">
            <NavItem icon={<User size={18} />} text="Dashboard" />
          </Link>
          <Link to="/CoursesPage">
            <NavItem icon={<CourseImage />} text="Courses" active />
          </Link>
          <Link to="/Events">
            <NavItem icon={<Events />} text="Events" />
          </Link>
          <Link to="/Announcemet">
            <NavItem icon={<Announcement />} text="Announcements" />
          </Link>
          <Link to="/Results">
            <NavItem icon={<Search size={18} />} text="Results" />
          </Link>
        </nav>
      </aside>

      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
            <ChevronLeft size={24} />
            <span className="ml-2 text-lg font-semibold">Courses</span>
          </button>
          <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer">
            <User size={18} />
            <span>Kavindu</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 border rounded flex-1"
          />
        </div>

        {/* Courses Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-3">Module</th>
                <th className="p-3">Status</th>
                <th className="p-3">Resources</th>
                <th className="p-3">Assignment</th>
              </tr>
            </thead>
            <tbody>
              {error ? (
                <tr>
                  <td className="p-3 text-red-500" colSpan={4}>{error}</td>
                </tr>
              ) : (
                filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-3">{course.module}</td>
                      <td className="p-3">{course.status}</td>
                      <td className="p-3">
                        <button onClick={() => navigate("/lecture-materials")} className="bg-blue-600 text-white px-4 py-2 rounded-lg">View</button>
                      </td>
                      <td className="p-3">
                        <button onClick={() => navigate("/assignments")} className="bg-teal-700 text-white px-4 py-2 rounded-lg">Open</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="p-3 text-gray-500" colSpan={4}>No courses found.</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
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

export default CoursesPage;
