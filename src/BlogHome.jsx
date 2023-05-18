import { BlogFooter } from "./BlogFooter";
import { BlogHeader } from "./BlogHeader";

export const BlogHome = ({data}) => {
  return (
    <>
      <BlogHeader title={data.tile} />
      <div className="main">
        <BlogMain blogs={data.blogs} />
        <BlogAside blogs={data.blogs} />
      </div>
      <BlogFooter name={data.name} date={data.date}/>
    </>
  );
};
