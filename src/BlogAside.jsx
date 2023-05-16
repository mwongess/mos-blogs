/* eslint-disable react/jsx-key */
import "./App.css";

/* eslint-disable react/prop-types */
export const BlogAside = ({ blogs }) => {
  return (
    <div className="aside">
      {blogs.map((blog) => (
        <div>
          <h5>{blog.author}</h5>
          <p>{blog.blogName}</p>
        </div>
      ))}
    </div>
  );
};
