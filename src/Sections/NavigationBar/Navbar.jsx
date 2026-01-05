import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex font-sans items-center justify-between px-20 py-7 relative border-b-2 border-black mb-10">
      <div className="flex-1 flex justify-start">
        <ul className="flex items-center gap-8 text-gray-800">
          <NavItem to="/about" label="About" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/stores" label="Stores" />
          <NavItem to="/daily" label="Daily" />
          <NavItem to="/collab" label="Collaborations" />
        </ul>
      </div>

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/" className="font-serif italic text-5xl text-gray-900">
          Bright
        </Link>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <Link
          to="/cart"
          className="font-semibold hover:text-orange-600 transition-colors"
        >
          Cart (0)
        </Link>
      </div>
    </div>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li className="relative group">
      <Link
        to={to}
        className="relative block py-1 text-sm font-semibold uppercase tracking-wide"
      >
        {label}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
      </Link>
    </li>
  );
};

export default Navbar;
