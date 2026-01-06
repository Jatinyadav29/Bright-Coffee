import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

library.add(fas, far, fab);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useGSAP(
    () => {
      if (!menuRef.current) return;

      gsap.to(menuRef.current, {
        x: menuOpen ? 0 : "-100%",
        duration: 1,
        ease: menuOpen ? "power3.out" : "power3.in",
      });
    },
    { dependencies: [menuOpen] }
  );
  return (
    <>
      <div className="sticky top-0 z-50 bg-white flex font-sans items-center justify-between lg:px-20 md:px-14 px-7 py-7 border-b-2 border-black mb-10">
        <div className="flex-1 flex justify-start">
          <button
            onClick={() => {
              setMenuOpen(true);
            }}
            className="xl:hidden text-sm tracking-wide"
          >
            <FontAwesomeIcon className="pr-3" icon="fa-solid fa-bars" />
            Menu
          </button>
          <ul className="hidden xl:flex items-center xl:gap-8 text-gray-800">
            <NavItem to="/about" label="About" />
            <NavItem to="/shop" label="Shop" />
            <NavItem to="/stores" label="Stores" />
            <NavItem to="/daily" label="Daily" />
            <NavItem to="/collab" label="Collaborations" />
          </ul>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <Link
            to="/"
            className="font-serif italic sm:text-5xl text-2xl text-gray-900"
          >
            Bright
          </Link>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <Link to="/cart" className="hover:text-orange-600 transition-colors">
            Cart (0)
          </Link>
        </div>
      </div>
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-screen sm:w-[50vw] w-full bg-black z-50 -translate-x-full ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          onClick={() => {
            setMenuOpen(false);
          }}
          className="p-5 tracking-wide text-white"
        >
          <FontAwesomeIcon className="pr-3" icon="fa-solid fa-xmark" />
          Menu
        </button>
        <ul className="flex flex-col gap-10 text-4xl px-5 py-10 text-white">
          <NavItem to="/about" label="About" />
          <NavItem to="/shop" label="Shop" />
          <NavItem to="/stores" label="Stores" />
          <NavItem to="/daily" label="Daily" />
          <NavItem to="/collab" label="Collaborations" />
        </ul>
      </div>
    </>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <li className="relative group">
      <Link
        to={to}
        className="relative block py-1 font-light sm:text-md tracking-wide"
      >
        {label}
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black transition-all duration-700 ease-out group-hover:w-full group-hover:left-0"></span>
      </Link>
    </li>
  );
};

export default Navbar;
