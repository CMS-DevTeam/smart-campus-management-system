import { useState } from "react";
import { Search, Pencil, Eye, Trash, ChevronLeft, User, Plus } from "lucide-react";
import Courses from '@mui/icons-material/CastForEducationRounded';
import Events from '@mui/icons-material/DateRangeRounded';
import Announcement from '@mui/icons-material/CampaignRounded';
import { useModal } from "../../context/ModalContext";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

const EventsDetailsPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const navigate = useNavigate();
  
  const [selectedRole, setSelectedRole] = useState("Announcement");
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const { openModal } = useModal();

  const handleRoleChange = (e:any) => {
    setSelectedRole(e.target.value);
  };

  return (
    <div className="flex h-screen">

      <div className="flex-1 bg-gray-100 p-6">
        <div className="flex justify-between items-center mb-6">
          <button className="flex items-center text-gray-600 hover:text-gray-900">
          
          </button>
         
        </div>
        
        <div className="p-4 border rounded-lg shadow-lg bg-white w-1/2 mx-auto mt-10">
        <h2 className="text-xl font-bold mb-4">Event Details</h2>
        <div className="flex items-center space-x-4">
          <div className="w-50 h-50 bg-gray-300 full"></div>
          {/* <button className="bg-blue-500 text-white px-3 py-1 rounded">Update Profile Image</button> */}
        </div>
        <div className="mt-4">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Address:</strong> 123 Street, City</p>
          <p><strong>Birthday:</strong> 01/01/2000</p>
          <p><strong>Contact No:</strong> +1234567890</p>
          <p><strong>Email:</strong> johndoe@example.com</p>
          <p><strong>Course Name:</strong> Computer Science</p>
        </div>
        {/* <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Update</button> */}
        {/* <button onClick={onBack} className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded">
          Back
        </button> */}
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

export default EventsDetailsPage;
