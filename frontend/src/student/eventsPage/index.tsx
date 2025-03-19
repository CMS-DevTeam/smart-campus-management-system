
import { useState, useEffect } from "react";
import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
import Courses from '@mui/icons-material/CastForEducationRounded';
import EventImage from '@mui/icons-material/DateRangeRounded';
import Announcement from '@mui/icons-material/CampaignRounded';
import { useModal } from "../../context/ModalContext";
import EventsDetailsPage from "../eventDeatils";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import API from "frontend/src/service/Axios";
import { format } from 'date-fns';


const EventsPage = () => {

  interface Events {
    title: string;
    venue: string;
    description: string;
    guest: string;
    course: string;
    dateAndTime: string; // Add this line
  }
  const navigate = useNavigate();
  const EventsDetailsPage = ({ event }: { event: Events }) => {
    return (
      <div className="p-4 border rounded-lg shadow-lg bg-white w-1/2 mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <div className="flex items-center space-x-4">
          <div className="w-50 h-50 bg-gray-300 full"></div>
          {/* <button className="bg-blue-500 text-white px-3 py-1 rounded">Update Profile Image</button> */}
        </div>
        <div className="mt-4">
          <p><strong>Name:</strong> {event.title}</p>
          <p><strong>Address:</strong> {event.venue}</p>
          <p><strong>Birthday:</strong> {format(new Date(event.dateAndTime), 'MMMM dd, yyyy')}</p>
          <p><strong>Contact No:</strong> {event.guest}</p>
          <p><strong>Email:</strong> {event.description}</p>
          <p><strong>Course Name:</strong> {event.course}</p>
        </div>
        {/* <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Update</button> */}
        {/* <button onClick={onBack} className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button> */}
      </div>
    );
  }
  const [events, setEvents] = useState<Events[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Fetch events from the backend on mount
  useEffect(() => {
    API.get("/event")
      .then((response) => {
        console.log(response.data); // Log the response data
        // Check if the response.data contains a 'data' property with courses
        if (response.data && Array.isArray(response.data.data)) {
          setEvents(response.data.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Unexpected data format received.");
          setEvents([]); // Fallback to empty array
          
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses.");
        setEvents([]); // Prevent map error
        setLoading(false);
      });
  }, []);

  const [selectedRole, setSelectedRole] = useState("Events");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const { openModal } = useModal();

  const handleGetEvent = (event: Events) => {
    openModal(<EventsDetailsPage event={event}/>);
  };

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

  const handleRoleChange = (e: any) => {
    setSelectedRole(e.target.value);
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
            <NavItem icon={<Courses />} text="Courses" />
          </Link>
          <Link to="/Events">
            <NavItem icon={<EventImage />} text="Events" active />
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
            <span className="ml-2 text-lg font-semibold">Events</span>
          </button>
          <div className="flex items-center space-x-4 relative">
            <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer mr-0">
              <User size={18} />
              <span>Kavindu</span>
            </div>
            {renderDropdown()}
          </div>
        </div>

        {loading ? (
          <div>Loading events...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="p-6 w-full flex flex-col items-left">
            {events.length === 0 ? (
              <div>No events available.</div>
            ) : (
              events.map((event, index) => (
                
                <div
                  key={index}
                  className={`border rounded-lg p-6 ${index === 0 ? "h-36" : "h-34"} bg-gray-100 flex justify-between items-center mt-4`}
                >
                  <span className="text-lg font-medium text-black">{event.title}</span>
                  <span className="text-lg font-medium text-black">{event.venue}</span>
                  <span className="text-lg font-medium text-black">{format(new Date(event.dateAndTime), 'MMMM dd, yyyy')}</span>
                  <button
                    onClick={() => handleGetEvent(event)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  >
                    View
                  </button>
                </div>
              ))
            )}
          </div>
        )}
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

export default EventsPage;
