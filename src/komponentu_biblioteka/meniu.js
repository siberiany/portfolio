import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./meniu.css";

function Meniu({ klase = "", stilius = {}, komandos = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    closeMenu();
  };

  return (
    <nav className={`menu-container ${klase}`} style={stilius}>
      {isMobile ? (
        <>
          <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <div className={`menu-overlay ${isMenuOpen ? "open" : ""}`}>
            <div className="menu-links">
              <ul>
                {komandos.map((komanda, index) => (
                  <li key={index} className="nav-item">
                    <Link
                      to={komanda.adresas}
                      className={`nav-link ${activeIndex === index ? "active-link" : ""}`}
                      onClick={() => handleClick(index)}
                    >
                      {komanda.pavadinimas}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <ul className={`nav ${klase}`} style={stilius}>
          {komandos.map((komanda, index) => (
            <li key={index} className="nav-item">
              <Link
                to={komanda.adresas}
                className={`nav-link ${activeIndex === index ? "active-link" : ""}`}
                onClick={() => handleClick(index)}
              >
                {komanda.pavadinimas}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Meniu;


