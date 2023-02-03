import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <Menu right width={"13em"}>
      <Link className="menu-item" to="/SWAPI-API">
        Home
      </Link>
      <Link className="menu-item" to="/SWAPI-API/Characters">
        Characters
      </Link>
      <Link className="menu-item" to="/SWAPI-API/Planets">
        Planets
      </Link>
      <Link className="menu-item" to="/SWAPI-API/Films">
        Films
      </Link>
      <Link className="menu-item" to="/SWAPI-API/Species">
        Species
      </Link>
      <Link className="menu-item" to="/SWAPI-API/Vehicles">
        Vehicles
      </Link>
      <Link className="menu-item" to="/SWAPI-API/Starships">
        Starships
      </Link>
    </Menu>
  );
};

export default HamburgerMenu;
