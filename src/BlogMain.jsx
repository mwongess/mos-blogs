import { Link } from "react-router-dom";
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export const BlogMain = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div className="left">
          <div className="top">
            <div>
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                alt=""
              />
            </div>
            <h4 className="title">{blog.author}</h4>
          </div>
          <Link to="/blogs/details">
            <div className="blog">
              <h4>{blog.blogName}</h4>
              <p>{blog.description}</p>
            </div>
          </Link>

          <hr />
        </div>
      ))}
    </div>
  );
};
