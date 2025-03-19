// import { useState, useEffect } from "react";
// import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
// import Courses from '@mui/icons-material/CastForEducationRounded';
// import Events from '@mui/icons-material/DateRangeRounded';
// import Announcement from '@mui/icons-material/CampaignRounded';
// import { useModal } from "../../context/ModalContext";
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
// import API from "frontend/src/service/Axios";
// import AnnouncementDetailsComponent from "../../student/announcementDetails";

// interface AnnouncementDetails {
//   title: string;
//   description: string;
//   courses: string;
// }

// const Announcemet = () => {

//   interface Announcemet {
//     title: string;
//     description: string;
//     courses: string;
    
//   }

//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedEvent, setSelectedEvent] = useState<any | null>(null); // Track the selected event for the modal
//   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
//   const [announcement, setAnnouncement] = useState<Announcemet[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//     const AnnouncementDetailsModal = ({ announcementDetails }: { announcementDetails: AnnouncementDetails }) => {
//       return (
//         <div className="p-4 border rounded-lg shadow-lg bg-white w-1/2 mx-auto mt-10">
//           <h2 className="text-xl font-bold mb-4">Event Details</h2>
//           <div className="flex items-center space-x-4">
//             <div className="w-50 h-50 bg-gray-300 full"></div>
//             {/* <button className="bg-blue-500 text-white px-3 py-1 rounded">Update Profile Image</button> */}
//           </div>
//           <div className="mt-4">
//             <p><strong>Title:</strong> {announcementDetails.title}</p>
//             <p><strong>Description:</strong> {announcementDetails.description}</p>
//             <p><strong>Cources:</strong> {announcementDetails.courses}</p>
//           </div>
//           {/* <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Update</button> */}
//           {/* <button onClick={onBack} className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded">
//             Back
//           </button> */}
//         </div>
//       );
//     }

  
//   useEffect(() => {
//     API.get("/announcement")
//       .then((response) => {
//         console.log(response.data); // Log the response data
//         // Check if the response.data contains a 'data' property with courses
//         if (response.data && Array.isArray(response.data.data)) {
//           setAnnouncement(response.data.data);
//         } else {
//           console.error("Unexpected data format:", response.data);
//           setError("Unexpected data format received.");
//           setAnnouncement([]); // Fallback to empty array
//         }
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching courses:", error);
//         setError("Failed to load courses.");
//         setAnnouncement([]); // Prevent map error
//         setLoading(false);
//       });
//   }, []);
//   const [selectedRole, setSelectedRole] = useState("Announcement");
//   const [isOpen, setIsOpen] = useState(false);
  
//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     window.location.href = "/login";
//   };

//   const openModal = (announcementDetails: any) => {
//     setSelectedEvent(announcementDetails);
//     setIsModalOpen(true); // Open the modal when the View button is clicked
//   };

//   const closeModal = () => {
//     setIsModalOpen(false); // Close the modal
//     setSelectedEvent(null); // Reset selected event
//   };


//   const handleGetAnnouncement = (announcementDetails: AnnouncementDetails) => {
//     openModal(<AnnouncementDetailsModal announcementDetails={announcementDetails}/>);
//   };
//   const renderDropdown = () => {
//     return (
//       <>
//         {isOpen && (
//           <div className="absolute right-0 mt-[140px] w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <button className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
//                 My Account
//               </button>
//               <button className="cursor-pointer text-left block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleLogout}>
//                 Logout
//               </button>
//             </div>
//           </div>
//         )}
//       </>
//     );
//   };

//   return (
//     <div className="flex h-screen">
//       <aside className="w-64 bg-gray-900 text-white p-4">
//         <div className="flex items-center justify-left mb-6">
//           <img src="images/logo.png" alt="Logo" className="w-auto h-10" />
//         </div>
//         <nav className="space-y-4">
//         <Link to="/student-dashboard">
//             <NavItem icon={<User size={18} />} text="Dashboard"  />
//             </Link>
//             <Link to="/CoursesPage">
//             <NavItem icon={<Courses />} text="Courses" />
//             </Link>
//           <Link to="/Events">
//           <NavItem icon={<Events />} text="Events"/>
//           </Link>
//           <Link to="/Announcemet">
//           <NavItem icon={<Announcement />} text="Announcements" active/>
//           </Link>
//           <Link to="/Results">
//           <NavItem icon={<Search size={18} />} text="Results" />
//           </Link>
//         </nav>
//       </aside>

//       <div className="flex-1 bg-gray-100 p-6">
//         <div className="flex justify-between items-center mb-6">
//           <button className="flex items-center text-gray-600 hover:text-gray-900">
//             <ChevronLeft size={24} />
//             <span className="ml-2 text-lg font-semibold">Announcement</span>
//           </button>
//           <div className="flex items-center space-x-4 relative">
//             <div onClick={toggleMenu} className="flex items-center space-x-2 bg-white p-2 px-4 rounded-full shadow-md cursor-pointer mr-0">
//               <User size={18} />
//               <span>Kavindu</span>
//             </div>
//             {renderDropdown()}
//           </div>
//         </div>
//         <div className="p-2 w-full flex flex-col items-left">
//           {announcement.map((announcement) => (
//             <div
//               key={announcement.title}
//               className={`border rounded-lg p-6 w-full h-32 bg-gray-100 flex justify-between items-center mt-4`}
//             >
//               <span>{announcement.description}</span>
//               <div className="flex justify-center items-center min-h-screen">
//                 <button
//                   onClick={() => handleGetAnnouncement(announcement)} // Open the modal with event details
//                   className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
//                 >
//                   View
//                 </button>
//               </div>
//             </div>
//           ))}
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

// export default Announcemet;



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


const Announcemet = () => {

  interface Announcemet {
    title: string;
    description: string;
    courses: string;
    
  }
  const navigate = useNavigate();
  const AnnouncementDetailsPage = ({ announcemet }: { announcemet: Announcemet }) => {
    return (
      <div className="p-4 border rounded-lg shadow-lg bg-white w-1/2 mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <div className="flex items-center space-x-4">
          <div className="w-50 h-50 bg-gray-300 full"></div>
          {/* <button className="bg-blue-500 text-white px-3 py-1 rounded">Update Profile Image</button> */}
        </div>
        <div className="mt-4">
          <p><strong>Name:</strong> {announcemet.title}</p>
          <p><strong>Address:</strong> {announcemet.description}</p>
          <p><strong>Contact No:</strong> {announcemet.courses}</p>
          
        </div>
        {/* <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Update</button> */}
        {/* <button onClick={onBack} className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button> */}
      </div>
    );
  }
  const [announcemet, setAnnouncement] = useState<Announcemet[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  // Fetch events from the backend on mount
  useEffect(() => {
    API.get("/announcement")
      .then((response) => {
        console.log(response.data); // Log the response data
        // Check if the response.data contains a 'data' property with courses
        if (response.data && Array.isArray(response.data.data)) {
          setAnnouncement(response.data.data);
        } else {
          console.error("Unexpected data format:", response.data);
          setError("Unexpected data format received.");
          setAnnouncement([]); // Fallback to empty array
          
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
        setError("Failed to load courses.");
        setAnnouncement([]); // Prevent map error
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

  const handleGetAnnouncement = (announcement: Announcemet) => {
    openModal(<AnnouncementDetailsPage announcemet={announcement}/>);
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
            <NavItem icon={<EventImage />} text="Events"  />
          </Link>
          <Link to="/Announcemet">
            <NavItem icon={<Announcement />} text="Announcements" active/>
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
          <div>Loading announcemet...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="p-6 w-full flex flex-col items-left">
            {announcemet.length === 0 ? (
              <div>No events available.</div>
            ) : (
              announcemet.map((announcemet, index) => (
                
                <div
                  key={index}
                  className={`border rounded-lg p-6 ${index === 0 ? "h-36" : "h-34"} bg-gray-100 flex justify-between items-center mt-4`}
                >
                  <span className="text-lg font-medium text-black">{announcemet.title}</span>
                  <span className="text-lg font-medium text-black">{announcemet.description}</span>
                  <span className="text-lg font-medium text-black">{announcemet.courses}</span>
                  <button
                    onClick={() => handleGetAnnouncement(announcemet)}
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

export default Announcemet;
