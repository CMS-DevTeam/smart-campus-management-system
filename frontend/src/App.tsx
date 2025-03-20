import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./admin/dashboard";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import { ModalProvider } from "./context/ModalContext";
import ModalComponent from "./components/modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./student/dashboard";
import LectureMaterial from "./student/components/forms/lectureMaterialsForm"
import Assignments from "./student/components/forms/AssignmentForm";
import Events from "./student/eventsPage";
import EventForm from "./student/eventDeatils";
import Courses from "./student/courses"
import Announcemet from "./student/announcement";
import Results from "./student/Results";
import StudentDetails from "../src/student/components/forms/StudentDetails";
import AnnouncementDetails from "./student/announcementDetails";
import AssignmentSubmitForm from "./student/components/forms/assignmentSubmitForm";
import LecturerDashboard from "./lecturer/dashboard/LectureDashboard";

const App: React.FC = () => {
  return (
    <ModalProvider>
      <ModalComponent />
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/student-dashboard" element={<Dashboard/>}/>
            <Route path="/Lecture-Materials" element={<LectureMaterial/>}/>
            <Route path="/Assignments" element={<Assignments/>}/>
            <Route path="/Events" element={<Events/>}/>
            <Route path="/EventForm" element={<EventForm/>}/>
            <Route path="/CoursesPage" element={<Courses/>}/>
            <Route path="/Announcemet" element={<Announcemet/>}/>
            <Route path="/Results" element={<Results/>}/>
            <Route path="/AnnouncementDetails" element={<AnnouncementDetails/>}/>
            <Route path="/StudentDetails" element={<StudentDetails onBack={() => { /* handle back action */ }} />}/>
            <Route path="/assignmentSubmit" element={<AssignmentSubmitForm/>}/>

            <Route path="/lecture-dashboard" element={<LecturerDashboard />} />
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
};


export default App;
