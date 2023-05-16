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
            <p>{blog.author}</p>
          </div>
          <div className="blog">
            <h3>{blog.blogName}</h3>
            <p>{blog.description}</p>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};
