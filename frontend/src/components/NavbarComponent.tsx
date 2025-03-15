import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex justify-center gap-4">
        <li className="list-none"><Link to="/" className="text-white font-semibold">Home</Link></li>
        <li className="list-none"><Link to="/login" className="text-white font-semibold">Login</Link></li>
        <li className="list-none"><Link to="/about" className="text-white font-semibold">About</Link></li>
        <li className="list-none"><Link to="/contact" className="text-white font-semibold">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
