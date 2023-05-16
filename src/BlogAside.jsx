/* eslint-disable react/jsx-key */
import "./App.css";

/* eslint-disable react/prop-types */
export const BlogAside = ({ blogs }) => {
  return (
    <div className="aside">
      <div>
        <h2>Highlights</h2>
      </div>
      {blogs.map((blog) => (
        <div>
          <p>{blog.blogName}</p>
        </div>
      ))}
      <div className="recommended">
        <h3>Recommended Topics</h3>
        <div>
          <p>Programming</p>
          <p>Machine Learning</p>
          <p>Technology</p>
          <p>Self Improvement</p>
          <p>Writing</p>
        </div>
      </div>
      <div className="tofollow">
        <h3>Who to Follow</h3>
        {blogs.map((blog) => (
          <div className="card" >
            <div className="desc">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                alt=""
              />
              <div className="follow">
                <p>{blog.author}</p>
                <button>Follow</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
