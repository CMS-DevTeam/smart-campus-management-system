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
import StudentDashboard from "./student/dashboard";
import LectureMaterial from "./student/components/forms/lectureMaterialsForm"
import Assignments from "./student/components/forms/AssignmentForm";
import Events from "./student/eventsPage";
import EventForm from "./student/components/forms/EventsForm";

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
            <Route path="/student-dashboard" element={<StudentDashboard/>}/>
            <Route path="/Lecture-Materials" element={<LectureMaterial/>}/>
            <Route path="/Assignments" element={<Assignments/>}/>
            <Route path="/Events" element={<Events/>}/>
            <Route path="/EventForm" element={<EventForm/>}/>
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;
