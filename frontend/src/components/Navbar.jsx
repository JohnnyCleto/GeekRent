import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

import {
  FaUser,
  FaBox,
  FaHome,
  FaCalendar,
  FaClipboardList,
  FaSignOutAlt,
  FaChartBar
} from "react-icons/fa";

import { AuthContext } from "../context/AuthContext";

import "../styles/navbar.css";

function Navbar() {

  const navigate = useNavigate();

  const { user, logout } = useContext(AuthContext);

  function handleLogout() {

    logout();

    navigate("/login");

  }

  return (

    <nav className="navbar">

      <div className="navbar-logo">

        🎌 GeekRent

      </div>

      <div className="navbar-links">

        <Link to="/">

          <FaHome />

          Home

        </Link>

        <Link to="/dashboard">

          <FaChartBar />

          Dashboard

        </Link>

        <Link to="/items">

          <FaBox />

          Itens

        </Link>

        <Link to="/rentals">

          <FaCalendar />

          Locações

        </Link>

        <Link to="/my-rentals">

          <FaClipboardList />

          Minhas Locações

        </Link>

        <Link to="/profile">

          <FaUser />

          Perfil

        </Link>

      </div>

      <div className="navbar-user">

        {user && (

          <span>

            👋 {user.name || "Usuário"}

          </span>

        )}

        <button

          className="logout-btn"

          onClick={handleLogout}

        >

          <FaSignOutAlt />

          Sair

        </button>

      </div>

    </nav>

  );

}

export default Navbar;