import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    navigate("/");
  };

  return (
    <header
      id="header" className={`fixed top-0 w-full z-10 flex items-center justify-between px-5 py-4 h-[60px] transition-all duration-500 ${isScrolled ? "bg-[#111]" : "bg-transparent"
        }`}
    >
      <img
        src="/netflix-logo.png"
        alt="Netflix Logo"
        className="w-20 object-contain"
      />

      <div className="relative" ref={dropdownRef}>
        <img
          src="/Netflix-avatar.png"
          alt="User Avatar"
          className="w-8 h-8 object-contain cursor-pointer rounded-full"
          onClick={() => setDropdownOpen((prev) => !prev)}
        />

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-[#111] border border-gray-700 rounded shadow-md py-2 z-50">
            <button onClick={handleSignOut} className="w-full text-left px-4 py-2 text-white hover:bg-gray-800">
              Sign out
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
