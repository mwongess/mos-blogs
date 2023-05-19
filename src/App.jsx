import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BlogHome } from "./BlogHome";
import { BlogDetails } from "./BlogDetails";
import { NotFound } from "./NotFound";
import { BlogHeader } from "./BlogHeader";
import { BlogFooter } from "./BlogFooter";
import { WriteBlog } from "./WriteBlog";

const data = {
  title: "BLOGS",
  name: "Amos Mwongela",
  date: new Date().toDateString(),
  blogs: [
    {
      author: "John Doe",
      imgUrl: "https://images.freeimages.com/images/large-previews/e56/run-away-1555225.jpg",
      blogName: "The Daily Buzz",
      description:
        "Get your daily dose of news, opinions, and hot takes on current events from around the world.",
    },
    {
      author: "Jane Smith",
      imgUrl: "https://images.freeimages.com/images/large-previews/49b/shoe-friends-1436939.jpg",
      blogName: "Travel Tales",
      description:
        "Join me on my adventures as I explore new destinations and share tips and tricks for making the most of your travels.",
    },
    {
      author: "David Lee",
      imgUrl: "https://images.freeimages.com/images/large-previews/fca/peppers-falling-into-water-1142701.jpg",
      blogName: "Fitness Fanatic",
      description:
        "Discover the latest trends in fitness and health, and get tips and advice for staying in shape and living your best life.",
    },
    {
      author: "Samantha Jones",
      imgUrl: "https://images.freeimages.com/images/large-previews/101/red-lady-1241907.jpg",
      blogName: "Tech Talk",
      description:
        "Stay up-to-date on the latest technology news and trends, with insights and analysis from industry experts and thought leaders.",
    },
    {
      author: "Michael Johnson",
      imgUrl: "https://images.freeimages.com/images/large-previews/415/brotherhood-at-sunset-1-1244631.jpg",
      blogName: "Foodie Finds",
      description:
        "Explore the world of cuisine with me, as I share recipes, restaurant reviews, and culinary adventures from around the globe.",
    },
  ],
};

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <BlogHeader title={data.title} />

        <Routes>
          <Route path="/" element={<BlogHome data={data} />}></Route>
          <Route path="/blogs/details" element={<BlogDetails />}></Route>
          <Route path="/new" element={<WriteBlog/>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <BlogFooter name={data.name} date={data.date} />
      </BrowserRouter>
    </div>
  );
}

export default App;
