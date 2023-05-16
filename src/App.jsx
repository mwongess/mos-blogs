import "./App.css";
import { BlogHeader } from "./BlogHeader";
import { BlogMain } from "./BlogMain";
import { BlogAside } from "./BlogAside";
import { BlogFooter } from "./BlogFooter";

const data = {
  tile: "MyBlogs",
  name: "Amos Mwongela",
  date: new Date().toDateString(),
  blogs: [
    {
      author: "John Doe",
      blogName: "The Daily Buzz",
      description:
        "Get your daily dose of news, opinions, and hot takes on current events from around the world.",
    },
    {
      author: "Jane Smith",
      blogName: "Travel Tales",
      description:
        "Join me on my adventures as I explore new destinations and share tips and tricks for making the most of your travels.",
    },
    {
      author: "David Lee",
      blogName: "Fitness Fanatic",
      description:
        "Discover the latest trends in fitness and health, and get tips and advice for staying in shape and living your best life.",
    },
    {
      author: "Samantha Jones",
      blogName: "Tech Talk",
      description:
        "Stay up-to-date on the latest technology news and trends, with insights and analysis from industry experts and thought leaders.",
    },
    {
      author: "Michael Johnson",
      blogName: "Foodie Finds",
      description:
        "Explore the world of cuisine with me, as I share recipes, restaurant reviews, and culinary adventures from around the globe.",
    },
  ],
};

function App() {
  return (
    <div className="body">
      <BlogHeader title={data.tile} />
      <div className="main">
        <BlogMain blogs={data.blogs} />
        <BlogAside blogs={data.blogs} />
      </div>
      <BlogFooter name={data.name} date={data.date} />
    </div>
  );
}

export default App;
