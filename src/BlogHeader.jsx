import "./App.css";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export const BlogHeader = ({ title }) => {
  return (
    <div className="header">
      <div className="logo">
        {/* <Link to="/">
          <div>
            <h2>{title}</h2>
          </div>
        </Link> */}
        <h2>{title}</h2>
      </div>
      <div>
        <input type="search" placeholder="Search blog" />
      </div>
    </div>
  );
};
