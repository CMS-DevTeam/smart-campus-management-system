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
            <Route path="/lecture-dashboard" element={<LecturerDashboard />} />
          </Route>
        </Routes>
      </Router>
    </ModalProvider>
  );
};

export default App;
