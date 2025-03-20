import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Input from '@components/input';
import Button from '@components/button';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('authToken');

    if (isLoggedIn) {
      navigate('');
    }
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "vidusha@gmail.com" && password === "123") {
      alert("Login successful!");
      localStorage.setItem("authToken", email + "logged");
      navigate("/lecture-dashboard");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 w-full m-auto">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 p-10">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <a href="/forgot-password" className="text-blue-500 text-sm mt-1 inline-block">Forgot it?</a>
        </div>
        <Button onClick={handleLogin} className="w-full bg-sky-800 text-white cursor-pointer">
          Log in
        </Button>
      </div>
    </div>
  );
}
