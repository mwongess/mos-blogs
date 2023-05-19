import "./App.css";
import { Link } from "react-router-dom";
import { FaHome, FaPenAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
export const BlogHeader = ({ title }) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <h2>{title}</h2>
        </Link>
      </div>
      <div className="home-link">
        <FaHome />
        <Link to="/">
          <p> Home</p>
        </Link>
      </div>
      <div className="home-link">
        <FaPenAlt />
        <Link to="/new">
          <p>Write</p>
        </Link>
      </div>
      <div>
        <input type="search" placeholder="Search blog" />
      </div>
    </div>
  );
};
