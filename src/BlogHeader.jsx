import "./App.css";
import { Link } from "react-router-dom";
import { FaHome, FaPenAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
export const BlogHeader = ({ title }) => {
  return (
    <div className="header">
      <div className="header-left">
        <div className="logo">
          <Link to="/">
            <h2>{title}</h2>
          </Link>
        </div>

        <div>
          <input type="search" placeholder="Search blog" />
        </div>
      </div>
      <div className="header-right">
      <div className="home-link">
        <FaPenAlt />
        <Link to="/new">
          <p>Write</p>
        </Link>
      </div>
        <div>
          <img src="https://d1fdloi71mui9q.cloudfront.net/CbqXSPh0QOmVXzz371YR_udij85JWVc0a7li5" alt="" />
          </div>
      </div>
      
    </div>
  );
};
