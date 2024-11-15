import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { NavLink, Link, useLocation } from "react-router-dom"; 
import "./navbar.css";
import logo from "../../assets/fke-logo-light.png";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  
  const location = useLocation(); // Aktif URL'yi almak için useLocation kullanıyoruz

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__container w-100 justify-space-between">
        <div className="navbar__logo w-100 align-i-center d-flex">
          <img src={logo} className="w64" alt="logo" />
          EduHub
        </div>
        <nav
          className={`justify-space-around navbar__links ${isMenuOpen ? "active" : ""}`}
        >
          {/* Link ile düzenlendi */}
          <NavLink 
            to="/" // anasayfa linki
            className={({ isActive }) => (isActive ? "bold text-success" : "")}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" // about sayfası
            className={({ isActive }) => (isActive ? "bold text-success" : "")}
          >
            About
          </NavLink>
          <NavLink 
            to="/courses" // courses sayfası
            className={({ isActive }) => (isActive ? "bold text-success" : "")}
          >
            Courses
          </NavLink>
          <NavLink 
            to="/contact" // contact sayfası
            className={({ isActive }) => (isActive ? "bold text-success" : "")}
          >
            Contact
          </NavLink>
        </nav>

        <div className="navbar__profile relative">
          <button
            className="navbar__profile-toggle borderless-btn middle-btn circle-btn light-btn"
            onClick={toggleProfileMenu}
          >
            <CgProfile />
          </button>
          {isProfileMenuOpen && (
            <div className="navbar__profile-menu text-right absolute d-flex">
              <Link to="#profile">Profilim</Link>
              <Link to="#settings">Ayarlar</Link>
              <Link to="#logout">Çıkış Yap</Link>
            </div>
          )}
        </div>

        <button className="navbar__toggle" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
