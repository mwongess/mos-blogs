/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export const BlogMain = ({ blogs }) => {
  return (
    <div>
      {blogs.map((blog) => (
        <div  className="blog">
          <p>{blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
};
