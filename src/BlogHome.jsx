import { BlogFooter } from "./BlogFooter";
import { BlogHeader } from "./BlogHeader"; 
import {BlogMain} from "./BlogMain"
import {BlogAside} from "./BlogAside"

export const BlogHome = ({data}) => {
  return (
    <>
      <div className="main">
        <BlogMain blogs={data.blogs} />
        <BlogAside blogs={data.blogs} />
      </div>
      <BlogFooter name={data.name} date={data.date}/>
    </>
  );
};
